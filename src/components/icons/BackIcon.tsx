import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const BackIcon: React.FC<IconProps> = ({
  size = 14,
  color = "#0370ee",
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size * (8.202 / 13.998)}
      viewBox="0 0 13.998 8.202"
      className={className}
    >
      <path
        id="Tracé_32496"
        data-name="Tracé 32496"
        d="M5.57,8.12,2.22,11.47a.754.754,0,0,0,0,1.06l3.35,3.35a.75.75,0,1,0,1.06-1.06L4.56,12.75H15.25a.75.75,0,1,0,0-1.5H4.56L6.63,9.18a.742.742,0,0,0,.22-.53.725.725,0,0,0-.22-.53A.737.737,0,0,0,5.57,8.12Z"
        transform="translate(-2.002 -7.895)"
        fill={color}
      />
    </svg>
  );
};
