import type { NavbarType } from "@/lib/type/NavbartType";
import { DashboardIcon, PaymentsIcon } from "@/components/icons";

export const navbarItems: NavbarType[] = [
    {
        title: "Tableau de bord",
        href: "/dashboard",
        icon: DashboardIcon
    },
    {
        title: "Paiements",
        href: "/dashboard/payments",
        icon: PaymentsIcon
    }
];
