import {    PExamViewStatusEnum} from "@/shared/enums/KobboViewStatusEnum.ts";
import type { UserEntity } from "./UserEntity";

export interface AuthUser{
    user:UserEntity|null
    viewStatus:PExamViewStatusEnum
}