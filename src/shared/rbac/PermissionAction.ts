export const PermissionAction = {
    READ : 'read',
    WRITE : 'write',
    DELETE : 'delete',
}as const
export type PermissionAction = (typeof PermissionAction)[keyof typeof PermissionAction];
