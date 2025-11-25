
import type {UserEntity} from "@/modules/auth/model/UserEntity.ts";

export function formatUserFromApi(data:any):UserEntity {
    return {
        userId:data.userId,
        email:data.email,
        phoneNumber:data.phoneNumber,
        fullName:data.fullName,
        role:data.role,
    }
}
