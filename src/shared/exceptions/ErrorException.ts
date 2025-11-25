import type {ErrorExceptionType} from "@/shared/exceptions/ErrorExceptionType.ts";

export class ErrorException extends Error {
    type: ErrorExceptionType;
    constructor(msg: string) {
        super(msg);
        this.type = "ErrorException";
    }
}