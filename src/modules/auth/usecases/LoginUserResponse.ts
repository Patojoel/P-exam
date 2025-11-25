import type {UserEntity} from "@/modules/auth/model/UserEntity.ts";

export interface LoginUserResponse {
    isLogged:boolean;
    user:UserEntity|null;
    message:string
}