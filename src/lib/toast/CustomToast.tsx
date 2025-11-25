import { twMerge } from "tailwind-merge";
import { AlertType } from "@/shared/enums/AlertType";
import { useEffect, useState } from "react";
// import {IconButton} from "@/components/ui/iconButton.tsx";
// import {XIcon} from "lucide-react";
import type { NotifyOptions } from "@/lib/toast/Notify.ts";
import { AlertCircleIcon, CheckIcon, InfoIcon } from "lucide-react";
// import CloseIcon from "@/components/generics/icons/CloseIcon.tsx";


const matcher = {
    [AlertType.SUCCESS]: {
        border: 'border-[#32A58B]',
        background: 'bg-[#CAF3EB]',
        background2: 'bg-[#32A58B]',
        hover: 'hover:text-[#00D162] hover:border-[#00D162]',
        linearGradiant: 'bg-[radial-gradient(62.93%_62.93%_at_28.16%_34.74%,_rgba(133,232,192,0.26)_0%,_rgba(133,232,192,0)_100%)]',
        linearGradiant2: 'bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(133,232,192,0.26)_0%,_rgba(133,232,192,0)_100%)]',
        icon: <CheckIcon />,
    },
    [AlertType.ERROR]: {
        border: 'border-[#EE313A]',
        background: 'bg-[#FED7D7]',
        background2: 'bg-[#EE313A]',
        hover: 'hover:text-[#FE0000] hover:border-[#FE0000]',
        linearGradiant: 'bg-[radial-gradient(62.93%_62.93%_at_28.16%_34.74%,_rgba(251,147,150,0.26)_0%,_rgba(254,215,215,0)_100%)]',
        linearGradiant2: 'bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(251,147,150,0.26)_0%,_rgba(254,215,215,0)_100%)]',
        // icon: <XIcon className={"text-white size-4.5"} />
        icon: <InfoIcon className="w-4 h-4 text-white" />,
    },
    [AlertType.WARNING]: {
        border: 'border-[#FEB548]',
        background: 'bg-[#FFF7DA]',
        background2: 'bg-[#FDBF38]',
        hover: 'hover:text-[#FEB548] hover:border-[#FEB548]',
        linearGradiant: 'bg-[radial-gradient(62.93%_62.93%_at_28.16%_34.74%,_rgba(255,228,155,0.26)_0%,_rgba(255,247,218,0)_100%)]',
        linearGradiant2: 'bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(255,228,155,0.26)_0%,_rgba(255,247,218,0)_100%)]',
        icon: <AlertCircleIcon />,
    },
    [AlertType.INFOS]: {
        border: 'border-[#0558F4]',
        background: 'bg-[#0558F4]',
        background2: 'bg-[#0558F4]',
        hover: 'hover:text-[#0558F4] hover:border-[#0558F4]',
        linearGradiant: 'bg-gradient-to-b from-[#EBF2FF] to-[#FFFFFF]',
        linearGradiant2: 'bg-gradient-to-b from-[#EBF2FF] to-[#FFFFFF]',
        icon: <InfoIcon className="w-4 h-4 text-white" />,
    },
    [AlertType.DEFAULT]: {
        border: 'border-[#0558F4]',
        background: 'bg-[#0558F4]',
        background2: 'bg-[#0558F4]',
        hover: 'hover:text-[#0558F4] hover:border-[#0558F4]',
        linearGradiant: 'bg-gradient-to-b from-[#EBF2FF] to-[#FFFFFF]',
        linearGradiant2: 'bg-gradient-to-b from-[#EBF2FF] to-[#FFFFFF]',
        icon: <InfoIcon className="w-4 h-4 text-white" />,
    },
}

type OwnProps = {
    className?: string
    close: () => void
    canClose?: boolean
    toastOptions: NotifyOptions
    duration?: number
}
const CustomToast: React.FC<OwnProps> =
    ({
        toastOptions,
        className,
        canClose = true,
        // close,
        duration = 5000
    }) => {
        const currentType = toastOptions.type ? matcher[toastOptions.type] : matcher[AlertType.DEFAULT]
        const [progress, setProgress] = useState(0);

        useEffect(() => {
            if (!duration) return;

            const interval = 100;
            const totalSteps = duration / interval;
            let currentStep = 0;

            const timer = setInterval(() => {
                currentStep++;
                const newProgress = 100 - (currentStep / totalSteps) * 100;
                setProgress(newProgress);

                if (currentStep >= totalSteps) clearInterval(timer);
            }, interval);

            return () => clearInterval(timer);
        }, [duration]);


        if (!toastOptions.msg) return null;

        return (
            <div
                className={twMerge(
                    'border rounded-[18px] flex items-start justify-between gap-2 p-4 relative w-fit min-w-[343px] overflow-hidden',
                    "shadow-[0px_20px_25px_0px_rgba(0,0,0,0.10),0px_10px_10px_0px_rgba(0,0,0,0.04)] bg-white",
                    `${currentType.border}`,
                    className,
                )}>
                <div className={twMerge(
                    progress ? currentType.linearGradiant : currentType.linearGradiant2,
                    "absolute left-[-71px] top-[-95px] blur-[3px]",
                    "max-w-[72%] h-[190px] w-full rounded-full  ")}>

                </div>
                <div className={twMerge("flex items-start gap-2",
                    canClose ? "max-w-[95%]" : ""
                )}>
                    <div className={`shrink-0 size-8 flex items-center justify-center rounded-full flex-center ${currentType.background}`}>
                        <div className={twMerge(
                            "size-6 rounded-full flex items-center justify-center",
                            currentType.background2
                        )}>
                            {currentType.icon}
                        </div>
                    </div>
                    <div className={"flex flex-col"}>
                        <p className="text-table-foreground font-semibold text-sm leading-5">
                            {toastOptions.msg}
                        </p>
                        {toastOptions.title && (
                            <p className="text-tertiary text-xs">
                                {toastOptions.title}
                            </p>
                        )}
                    </div>

                </div>

                {/*{canClose && (*/}
                {/*    <IconButton className={twMerge("shrink-0 w-8 h-8",*/}
                {/*        currentType.hover,*/}
                {/*    )} onClick={close}>*/}
                {/*        <CloseIcon />*/}
                {/*    </IconButton>*/}
                {/*)}*/}
                <div
                    className={twMerge("h-1 absolute inset-x-0 bottom-0 transition-all duration-100 ease-linear", currentType.background2)}
                    style={{
                        width: `${progress}%`,
                        transition: 'width 100ms linear',
                    }}
                />
            </div>
        );
    };

export default CustomToast;