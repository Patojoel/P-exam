export const UserRole ={
    CUSTOMER : "CUSTOMER",
    ADMIN : "ADMIN",
    GUEST: 'GUEST',
} as const
export type UserRole = (typeof UserRole)[keyof typeof UserRole];