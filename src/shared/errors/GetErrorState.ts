import type {ErrorState} from "@/shared/errors/ErrorState.ts";
import {parseMessages} from "@/shared/errors/parseMessages.ts";
import { AlertType } from "../enums/AlertType";

export const getErrorState = (error: any, customError?: object): ErrorState => {
    return {
        message: parseMessages(error),
        status: false,
        type: error.type,
        alertType: error.level === 'warning' ? AlertType.WARNING : AlertType.ERROR,
        ...customError
    };
}