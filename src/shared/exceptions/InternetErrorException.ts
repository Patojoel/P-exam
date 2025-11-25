import {ErrorException} from "@/shared/exceptions/ErrorException.ts";

export class InternetErrorException extends ErrorException {
    constructor(msg?: string) {
        super(
            msg ??
            "Nous rencontrons des problèmes avec votre connexion internet"
        );
        this.type = "InvalidEmailErrorException";
    }
}