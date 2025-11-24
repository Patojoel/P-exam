import { useLocation, useNavigate } from "react-router";

interface NavigationProps {
    replace?: boolean,
    native?: boolean
}

export const useRouter = () => {
    const location = useLocation();
    const params = new URLSearchParams(window.location.search);
    const navigate = useNavigate();

    const handleNavigate = (url: string, props?: NavigationProps) => {
        if (props?.native) {
            window.open(url, '_self');
            return;
        }
        navigate(url, {
            replace: props?.replace,
        });
    };

    const handleNavigateWithState = (url:string, state:any)=>{
        navigate(url, {
            state:{
                ...state
            }
        });
    }

    const handleBackToPreviousPage = () => {
        navigate(-1);
    };

    const isActiveRoute = (url: string) => {
        return location.pathname.includes(url);
    };

    return {
        handleNavigate,
        handleBackToPreviousPage,
        isActiveRoute,
        pathname: location.pathname,
        state:location.state,
        navigate,
        handleNavigateWithState,
        params,
    };
};