import {useEffect} from "react";
import {useNavigate} from "react-router";

interface OwnProps {
    canPop: boolean;
    callback?: () => void;
}

export const usePop = ({canPop, callback}: OwnProps = {canPop: false}) => {
    const navigate = useNavigate();
    useEffect(() => {
        const handlePopState = (e: PopStateEvent) => {
            console.log(canPop);
            e.preventDefault();
            if (!canPop) {
                callback?.();
                return;
            }
            navigate(0);
        };
        console.log("INIT")
        window.addEventListener("popstate", handlePopState);
        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, [navigate, canPop, callback]);
}