import React from "react";

interface GenericCardProps {
    header?: React.ReactNode;
    children: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
}

export const GenericCard: React.FC<GenericCardProps> = ({
    header,
    children,
    footer,
    className = "",
}) => {
    return (
        <div className={`bg-white rounded-[12px] px-4 min-h-[350px] flex flex-col ${className}`}>
            {header && <div className="mb-4">{header}</div>}
            <div className="grow">{children}</div>
            {footer && <div className="mt-4">{footer}</div>}
        </div>
    );
};
