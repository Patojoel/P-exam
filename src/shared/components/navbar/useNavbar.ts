import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { navbarItems } from "./NavbarItems";

export const useNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [selectedItem, setSelectedItem] = useState(navbarItems[0].href);

    const handleNavigation = (href: string) => {
        setSelectedItem(href);
        navigate(href);
    };

    const isSelected = (href: string) => {
        return location.pathname === href || selectedItem === href;
    };

    return {
        navbarItems,
        handleNavigation,
        isSelected
    };
};
