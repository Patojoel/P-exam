
import { AuthRoutes } from "@/modules/auth/infra/router/routes";
import type { UserRole } from "@/modules/auth/model/UserRole";
import { PExamViewStatusEnum } from "@/shared/enums/KobboViewStatusEnum.ts";
import { ROLES_ACCESS_BASED_ROUTES_MATCHER } from "@/shared/rbac/ROLES_ACCESS_BASED_ROUTES_MATCHER.ts";



export const resolveUserRoute = ({
    viewState,
    authRole,
}: {
    authRole: UserRole | undefined;
    viewState: PExamViewStatusEnum
}) => {
    if (authRole && ROLES_ACCESS_BASED_ROUTES_MATCHER[`${authRole}`]) {
        return ROLES_ACCESS_BASED_ROUTES_MATCHER[`${authRole}`];
    }
    const canAccessAuth = viewState === PExamViewStatusEnum.AUTH
    if (canAccessAuth) return AuthRoutes.login;
    return AuthRoutes.base;

};

export const isHaveAccessToDashboard = (authRole: UserRole | undefined) => {
    return !!authRole && !!ROLES_ACCESS_BASED_ROUTES_MATCHER[authRole];
};
