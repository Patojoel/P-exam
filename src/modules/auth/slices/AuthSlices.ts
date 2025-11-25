import {LoadingState} from "@/shared/enums/LoadingState.ts";
import {createSlice} from "@reduxjs/toolkit";
import {PExamViewStatusEnum} from "@/shared/enums/KobboViewStatusEnum.ts";
import type {AuthUser} from "@/modules/auth/model/AuthUser.ts";


type AuthSlice ={
    loading: LoadingState,
    authUser:AuthUser
}
const initialState: AuthSlice ={
    loading:LoadingState.idle,
    authUser:{
        user:null,
        viewStatus:PExamViewStatusEnum.AUTH
    }
}
export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: () => {
    }
});
