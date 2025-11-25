
import {UserRole} from "@/modules/auth/model/UserRole.ts";

export interface UserEntity 
{
    userId: string,
    email: string,
    phoneNumber: string,
    fullName: string,
    role: UserRole,
}
