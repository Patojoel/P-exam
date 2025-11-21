import React from "react";

interface PaymentsIconProps {
    size?: number;
    color?: string;
    className?: string;
}

export const PaymentsIcon: React.FC<PaymentsIconProps> = ({
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
            <rect width="24" height="24" fill="none" />
            <g>
                <path
                    d="M15,22.75H9c-5.43,0-7.75-2.32-7.75-7.75V9C1.25,3.57,3.57,1.25,9,1.25h6c5.43,0,7.75,2.32,7.75,7.75v6C22.75,20.43,20.43,22.75,15,22.75Zm-6-20C4.39,2.75,2.75,4.39,2.75,9v6c0,4.61,1.64,6.25,6.25,6.25h6c4.61,0,6.25-1.64,6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25Z"
                    fill={color}
                />
                <path
                    d="M14.111,17.61a.742.742,0,0,1-.53-.22.754.754,0,0,1,0-1.06l3.04-3.04a.75.75,0,0,1,1.06,1.06l-3.04,3.04A.749.749,0,0,1,14.111,17.61Z"
                    fill={color}
                />
                <path
                    d="M17.15,14.57H6.85a.75.75,0,1,1,0-1.5H17.16a.75.75,0,1,1-.01,1.5Z"
                    fill={color}
                />
                <path
                    d="M6.849,10.93a.742.742,0,0,1-.53-.22.754.754,0,0,1,0-1.06l3.04-3.04a.75.75,0,0,1,1.06,1.06l-3.04,3.04A.742.742,0,0,1,6.849,10.93Z"
                    fill={color}
                />
                <path
                    d="M17.15,10.93H6.85a.75.75,0,0,1,0-1.5H17.16a.75.75,0,1,1-.01,1.5Z"
                    fill={color}
                />
            </g>
        </svg>
    );
};
