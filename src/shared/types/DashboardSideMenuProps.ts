import React from "react";

export interface DashboardSideMenuProps {
    title: string,
    icon: React.ReactElement,
    activeIcon?: React.ReactNode,
    route: string;
    isDisabled?: boolean;
}