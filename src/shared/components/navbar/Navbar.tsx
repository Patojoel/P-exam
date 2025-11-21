import { cn } from "@/lib/config/utils";
import { useNavbar } from "./useNavbar";

export const Navbar = () => {
    const { navbarItems, handleNavigation, isSelected } = useNavbar();

    return (
        <nav className="flex items-center gap-2">
            {navbarItems.map((item) => {
                const Icon = item.icon;
                const selected = isSelected(item.href);

                return (
                    <button
                        key={item.href}
                        onClick={() => handleNavigation(item.href)}
                        className={cn(
                            "flex min-h-[44px] items-center text-[16px] gap-2 px-4 py-2 rounded-lg transition-colors duration-200",
                            "text-sm font-medium",
                            selected
                                ? "bg-[#E8F2FD] text-[#0370EE]"
                                : "text-[#1E1F25] hover:bg-gray-100"
                        )}
                    >
                        <Icon className="h-5 w-5" />
                        <span>{item.title}</span>
                    </button>
                );
            })}
        </nav>
    );
};
