import { PermissionAction } from "@/shared/rbac/PermissionAction.ts";
import { APP_RESOURCE } from "@/shared/rbac/APP_RESOURCE.ts";
import { PExamViewStatusEnum } from "@/shared/enums/KobboViewStatusEnum.ts";
import { UserRole } from "@/modules/auth/model/UserRole";


export interface PermissionRule {
    action: PermissionAction; // e.g., 'read', 'edit', 'delete'
    resource: APP_RESOURCE; // e.g., 'user', 'class', 'exam'
    roles: (keyof typeof UserRole)[]; // Use UserRole keys
    attributes?: (
        userAttrs: Record<string, any>,
        resourceAttrs?: Record<string, any>,
        envAttrs?: Record<string, any>
    ) => boolean; // ABAC check, including moduleCodes for SCHOOL_USER
}

export const PermissionRules: PermissionRule[] = [
    {
        resource: APP_RESOURCE.AUTH,
        action: PermissionAction.READ,
        roles: [UserRole.GUEST],
        attributes: (userAttrs) => {
            return userAttrs.viewState === PExamViewStatusEnum.AUTH;
        },
    },
    {
        resource: APP_RESOURCE.DASHBOARD,
        action: PermissionAction.READ,
        roles: [UserRole.ADMIN],
        attributes: (userAttrs) => {
            return userAttrs.viewState === PExamViewStatusEnum.DASHBOARD 

        },
    },
];
