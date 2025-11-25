import {Navigate} from "react-router-dom";
import {type JSX} from "react";
import type {APP_RESOURCE} from "@/shared/rbac/APP_RESOURCE.ts";
import { resolveUserRoute } from "./ResolveUserHomeRoute";
import { useAppSelector } from "@/lib/store/hooks";
import { AuthSelector } from "@/modules/auth/slices/AuthSelector";

interface ProtectedRouteProps {
    action: string;
    retUrl?: string;
    resource: APP_RESOURCE;
    resourceAttrs?: Record<string, any>;
    envAttrs?: Record<string, any>;
    children:React.ReactNode
    on403?:JSX.Element
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
                                                           action,
                                                           retUrl,
                                                           resource,
                                                           resourceAttrs = {},
                                                           envAttrs = {},
                                                           on403=<></>,
                                                           children,
                                                       }) => {
    const canAccess = useAppSelector(AuthSelector.checkCanAccessAuthorization);
    const authUser = useAppSelector(AuthSelector.authUser);
    const toUrl=resolveUserRoute({
        authRole:authUser.user?.role ,
        viewState:authUser.viewStatus
    })??retUrl
    const have403 = canAccess(action, resource, resourceAttrs, envAttrs)
    return canAccess(action, resource, resourceAttrs, envAttrs) ? children :
        have403 ? on403 :
            <Navigate to={toUrl} replace />;
};

export default ProtectedRoute;