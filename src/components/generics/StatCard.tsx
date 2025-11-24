import React from "react";
import { StatsIcon } from "@/components/icons/StatsIcon";

interface StatCardProps {
  title: string;
  amount: string;
  icon?: React.ReactNode;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  amount,
  icon,
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-[12px] p-6 flex justify-between items-center ${className}`}
    >
      <div className="flex flex-col gap-2">
        <span className="text-[#A5A5A7] text-sm font-normal">{title}</span>
        <span className="text-[#1E1F25] text-[24px] font-bold">{amount}</span>
      </div>
      <div className="bg-[#DDEEF0] p-3 rounded-[12px] flex items-center justify-center min-w-[67px] min-h-[67px]">
        {icon || <StatsIcon size={40} color="#448B96" />}
      </div>
    </div>
  );
};
