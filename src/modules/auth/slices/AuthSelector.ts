
import { LoadingState } from "@/shared/enums/LoadingState.ts";
import type { APP_RESOURCE } from "@/shared/rbac/APP_RESOURCE.ts";
import { createSelector } from "@reduxjs/toolkit";
import { PermissionRules } from "@/shared/rbac/PermissionRules.ts";
import { UserRole } from "@/modules/auth/model/UserRole.ts";
import type { RootState } from "@/lib/store/reducers";

const authState = (state: RootState) => state.authReducer;

const selectIsUserLoadingState = (state: RootState) => {
    return authState(state).loading === LoadingState.pending;
};

const checkCanAccessAuthorization = createSelector(
    [authState],
    (authState) => (
        action: string,
        resource: APP_RESOURCE,
        resourceAttrs: Record<string, any> = {},
        envAttrs: Record<string, any> = {}
    ): boolean => {
        const user = authState.authUser.user
        // if (!user) return false;

        const rule = PermissionRules.find((r) => r.action === action
            && r.resource === resource);
        if (!rule) return false;

        // RBAC: Check if user has one of the allowed roles
        if (!rule.roles.includes(user?.role ?? UserRole.GUEST)) return false;
        // ABAC: Apply attribute checks if defined
        if (rule.attributes && user) {
            return rule.attributes({
                // modules:user.modules,
                viewState: authState.authUser.viewStatus,
            }, resourceAttrs, envAttrs);
        }

        return true;
    }
);
const authUser = createSelector(
    [authState],
    (authState) => authState.authUser
);


export const AuthSelector = {
    selectIsUserLoadingState,
    checkCanAccessAuthorization,
    authUser
}
