import React from "react";

interface ExportIconProps {
    size?: number;
    color?: string;
    className?: string;
}

export const ExportIcon: React.FC<ExportIconProps> = ({
    size = 24,
    color = "currentColor",
    className = "",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            className={className}
            fill="none"
        >
            <rect width="24" height="24" fill="none" opacity="0" />
            <g transform="translate(3.25 2.856)">
                <path
                    d="M14.44,7.25a.742.742,0,0,1-.53-.22L11.88,5,9.85,7.03A.75.75,0,0,1,8.79,5.97l2.56-2.56a.754.754,0,0,1,1.06,0l2.56,2.56a.754.754,0,0,1,0,1.06A.742.742,0,0,1,14.44,7.25Z"
                    transform="translate(-3.25 -3.192)"
                    fill={color}
                />
                <path
                    d="M11.88,14.93a.755.755,0,0,1-.75-.75V4.01a.75.75,0,1,1,1.5,0V14.18A.749.749,0,0,1,11.88,14.93Z"
                    transform="translate(-3.25 -3.192)"
                    fill={color}
                />
                <path
                    d="M12,20.75A8.374,8.374,0,0,1,3.25,12a.75.75,0,0,1,1.5,0A6.935,6.935,0,0,0,12,19.25,6.935,6.935,0,0,0,19.25,12a.75.75,0,0,1,1.5,0A8.374,8.374,0,0,1,12,20.75Z"
                    transform="translate(-3.25 -3.192)"
                    fill={color}
                />
            </g>
        </svg>
    );
};
