import { useRouter } from "@/shared/hooks/useRouter";
import { navbarItemsPartners } from "./NavbarPartnersItems";

export const useNavbarPartners = () => {
    const router = useRouter();
    const currentPath = router.pathname;

    const isSelectedPath = (path: string) => {
        return currentPath === path;
    };

    const handleNavigation = (path: string) => {
        router.handleNavigate(path);
    };

    return {
        currentPath,
        navbarItemsPartners,
        handleNavigation,
        isSelectedPath
    };
};

