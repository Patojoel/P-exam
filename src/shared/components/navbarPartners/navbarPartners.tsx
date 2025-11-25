
import { cn } from "@/lib/config/utils";
import { useNavbarPartners } from "./useNavbarPartners";

export const NavbarPartners = () => {
    const { navbarItemsPartners, handleNavigation, isSelectedPath } = useNavbarPartners();

    return (
        <nav className="flex items-center gap-2">
            {navbarItemsPartners.map((item) => {
                const Icon = item.icon;
                const selected = isSelectedPath(item.href);

                return (
                    <button
                        key={item.href}
                        onClick={() => handleNavigation(item.href)}
                        className={cn(
                            "flex min-h-[44px] items-center text-[16px] gap-2 px-4 py-2 cursor-pointer rounded-lg transition-colors duration-200",
                            "text-sm font-semibold",
                            selected
                                ? "bg-[#E8F2FD] text-[#0370EE]"
                                : "text-[#1E1F25] hover:bg-gray-100"
                        )}
                    >
                        <Icon className="h-5 w-5" />
                        <span className=" font-semibold text-[16px]">{item.title}</span>
                    </button>
                );
            })}
        </nav>
    );
};
