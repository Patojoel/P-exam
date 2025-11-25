import type { LoginUserCommand } from "../usecases/LoginUserCommand"
import type { LoginUserResponse } from "../usecases/LoginUserResponse"


export interface AuthApiGateway {
    login: (command: LoginUserCommand) => Promise<LoginUserResponse>
}