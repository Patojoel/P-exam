import { AuthRoutes } from "@/modules/auth/infra/router/routes";
import { UserRole } from "@/modules/auth/model/UserRole";


type RoleRouteMap = Record<string, string>;

export const ROLES_ACCESS_BASED_ROUTES_MATCHER: RoleRouteMap = {
    [UserRole.GUEST]: AuthRoutes.base,
    

};
