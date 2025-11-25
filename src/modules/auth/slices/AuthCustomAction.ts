import {createAction} from "@reduxjs/toolkit";
import type {UserEntity} from "@/modules/auth/model/UserEntity.ts";

const UserHasConnected = createAction<UserEntity>("auth/user-has-connected")

export const AuthCustomAction = {
    UserHasConnected
}