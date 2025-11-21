import {twMerge} from "tailwind-merge";

const AuthHeader = ({
    titleClassName, title, children,titleImage,descriptionClassName,
                    }:{
    titleClassName?: string,
    descriptionClassName?: string,
    title?:string,
    titleImage?: React.ReactNode,
    children:React.ReactNode,
}) => {
    return (
        <div className={"flex flex-col justify-center w-full gap-4 "}>
            <div className={twMerge("text-center flex justify-center text-3xl font-Eudoxus font-bold",
                titleClassName)}>{title} {titleImage}</div>
            <div className={"text-center text-[18px] flex justify-center"}>
                <div className={twMerge("md:max-w-2/3 text-tertiary", descriptionClassName)}>{children}</div></div>
        </div>
    );
};

export default AuthHeader;

