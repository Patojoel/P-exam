import {FormLabel} from "@/components/ui/form.tsx";
import {Label} from "@/components/ui/label.tsx";
import {twMerge} from "tailwind-merge";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
import type {JSX} from "react";

const PExamLabel = ({
                         label,
                         required,
                         size = "default",
                         subLabel,
                         icon,
                         tooltip,
                         className,
                     }: {
    label?: string;
    tooltip?: React.ReactNode;
    subLabel?: string;
    required?: boolean;
    size?: "sm" | "default";
    className?: string;
    icon?: JSX.Element;
}) => {
    if (label) {
        return (
            <FormLabel
                className={twMerge(
                    "gap-0",
                    className,
                    size === "default" ? "" : size === "sm" ? "text-[16px]" : ""
                )}
            >
                {icon ? <span className={"mr-2"}>{icon}</span>:<></>}
                {label}
                <span className={"text-muted-foreground"}>{subLabel} </span>
                {required && <span className={"text-primary ml-2"}>*</span>}
                <LabelTooltip tooltip={tooltip}/>
            </FormLabel>
        );
    }
    return <></>;
};
const LabelTooltip = ({tooltip}: { tooltip?: React.ReactNode }) => {
    if (!tooltip) return <></>;
    return (
        <Tooltip>
            <TooltipTrigger asChild>
        <span className={"ml-2.5 text-primary"}>
        </span>
            </TooltipTrigger>
            <TooltipContent>{tooltip}</TooltipContent>
        </Tooltip>
    );
};

export const VossouLabelWithNoForm = ({
                                          label,
                                          required,
                                          size = "default",
                                      }: {
    label?: string;
    required?: boolean;
    size?: "sm" | "default";
}) => {
    if (label) {
        return (
            <Label
                className={twMerge(
                    size === "default" ? "" : size === "sm" ? "text-[13px]" : ""
                )}
            >
                {label} {required && <span className={"text-primary"}>*</span>}
            </Label>
        );
    }
    return <></>;
};

export default PExamLabel;
