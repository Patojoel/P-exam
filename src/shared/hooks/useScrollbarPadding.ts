import {useEffect, useRef, useState} from "react";


export const useScrollbarPadding = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [scrollbarWidth, setScrollbarWidth] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const update = () => {
            const needsScroll = el.scrollHeight > el.clientHeight;
            const scw = window.innerWidth - document.documentElement.clientWidth;
            const width =
                scw > 0
                    ? scw
                    : el.offsetWidth - el.clientWidth;

            setScrollbarWidth(needsScroll ? width : 0);
        };

        update();

        const resizeObs = new ResizeObserver(update);
        resizeObs.observe(el);
        window.addEventListener("resize", update);

        return () => {
            resizeObs.disconnect();
            window.removeEventListener("resize", update);
        };
    }, []);

    // style à appliquer directement sur le container
    const style = {paddingRight: scrollbarWidth ? `${scrollbarWidth}px` : undefined};

    return {ref, style};
}
