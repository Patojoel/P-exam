
import {createAsyncThunk} from "@reduxjs/toolkit";
import type {AppDispatch, RootState} from "@/lib/store/reducers.ts";
import {getErrorState} from "@/shared/errors/GetErrorState.ts";
import type { PExamDashboardStoreDependencies } from "./dependencies/dependencies";


export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: RootState,
    dispatch: AppDispatch,
    extra: PExamDashboardStoreDependencies
}>()

interface OwnProps<T> {
    apiCall: Promise<T>,
    rejectWithValue: (value: unknown) => any,
    error?: (data: T) => boolean,
    errorResponse?: (data: T) => Partial<T>,
    onSuccess?: (data: T) => void;
    customErrorResponse?: (data: T) => object
}

export const apiMiddleware = async <T>(props: OwnProps<T>):
        Promise<ReturnType<typeof props.rejectWithValue> | T> => {
        const {
            apiCall, rejectWithValue,
            error, errorResponse,
            onSuccess, customErrorResponse
        } = props;
        try {
            const response = await apiCall;
            if (error?.(response)) {
                return rejectWithValue(getErrorState(errorResponse?.(response) ?? response, customErrorResponse?.(response)));
            }
            onSuccess?.(response);
            return response;
        } catch (error) {
            console.error(error);
            return rejectWithValue(getErrorState(error));
        }
    }
;
