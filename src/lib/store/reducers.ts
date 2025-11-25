import { type Action, combineReducers, createSlice, type ThunkDispatch, type UnknownAction } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist/es/constants";
import type { PExamDashboardStoreDependencies } from "./dependencies/dependencies";
import { AuthSlice } from "@/modules/auth/slices/AuthSlices";


const testReducer = createSlice({
    name: 'test',
    initialState: {},
    reducers: {}
})

export const reducer = combineReducers({
    test: testReducer.reducer,
    authReducer:AuthSlice.reducer,

})

export type RootState = ReturnType<typeof reducer>;

export const rootReducer = (state: RootState | undefined, action: Action) => {
    if (action.type === PURGE) {
        // When a PURGE action is dispatched, reset the state to its initial value.
        return reducer(undefined, action);
    }
    return reducer(state, action);
};

export type AppDispatch = ThunkDispatch<RootState, PExamDashboardStoreDependencies, UnknownAction>;
// export const resetAppStore = () => ({ type: "RESET_APP" });
// dispatch({
//
// })
export const resetAppStore = () => ({
    type: PURGE,
    key: "auth",
    result: () => null
});