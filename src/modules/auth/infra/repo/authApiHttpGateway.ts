
import { HttpClient } from "@/shared/gateways/HttpClient.ts";

import type { AuthApiGateway } from "@/modules/auth/gateway/AuthApiGateway.ts";

import { ApiResponseStatut } from "@/shared/enums/ApiResponseStatut.ts";
import type { LoginUserCommand } from "../../usecases/LoginUserCommand";
import { AuthApiRoutes } from "../api-routes/AuthApiRoutes";
import { formatUserFromApi } from "../factories/formatUserFromApi";
import type { LoginUserResponse } from "../../usecases/LoginUserResponse";

export class AuthApiHttpGateway extends HttpClient implements AuthApiGateway {
    async login(command: LoginUserCommand): Promise<LoginUserResponse> {
        const response = await this.postWithResult({
            url: AuthApiRoutes.login,
            command
        })
        const isLogged = response.status === ApiResponseStatut.OK
        return {
            isLogged: isLogged,
            user: isLogged ? formatUserFromApi(response.user) : null,
            message: response.data?.message ?? response.message,
        }
    }
}