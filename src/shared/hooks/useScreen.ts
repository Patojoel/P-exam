import { useEffect, useState } from "react";

type ScreenInfo = {
    width: number;
    height: number;
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
};

export const useScreen = (): ScreenInfo => {
    const [screen, setScreen] = useState<ScreenInfo>(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        return {
            width: w,
            height: h,
            sm: w >= 640 && w < 768,
            md: w >= 768 && w < 1024,
            lg: w >= 1024 && w < 1280,
            xl: w >= 1280,
        };
    });

    const updateScreen = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;

        setScreen({
            width: w,
            height: h,
            sm: w >= 640 && w < 768,   // uniquement sm
            md: w >= 768 && w < 1024,  // uniquement md
            lg: w >= 1024 && w < 1280, // uniquement lg
            xl: w >= 1280,             // xl et +
        });
    };

    useEffect(() => {
        updateScreen(); // Initialisation
        window.addEventListener("resize", updateScreen);
        return () => window.removeEventListener("resize", updateScreen);
    }, []);

    return screen;
};
