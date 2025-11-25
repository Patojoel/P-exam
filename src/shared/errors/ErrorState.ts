import type {AlertType} from "@/shared/enums/AlertType.ts";
import type {ErrorExceptionType} from "@/shared/exceptions/ErrorExceptionType.ts";

export interface ErrorState {
    message: string,
    status: boolean,
    type: ErrorExceptionType;
    alertType: AlertType;
}