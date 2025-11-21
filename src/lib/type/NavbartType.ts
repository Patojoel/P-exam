import type { LucideIcon } from "lucide-react";
import type { FC } from "react";

type IconComponent = LucideIcon | FC<any>;

export interface NavbarType {
    title: string;
    href: string;
    icon: IconComponent;
}