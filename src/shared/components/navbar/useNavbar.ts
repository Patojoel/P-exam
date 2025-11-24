import { navbarItems } from "./NavbarItems";
import { useRouter } from "@/shared/hooks/useRouter";

export const useNavbar = () => {
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
        navbarItems,
        handleNavigation,
        isSelectedPath
    };
};

