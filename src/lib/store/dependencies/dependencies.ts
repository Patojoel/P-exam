import type { AuthApiGateway } from "@/modules/auth/gateway/AuthApiGateway"
import { AuthApiHttpGateway } from "@/modules/auth/infra/repo/authApiHttpGateway"

export const PExamDashboardExtraArgumentDependencies: PExamDashboardStoreDependencies = {
    authApiGateway: new AuthApiHttpGateway(),
    apiClient: null
}
export type PExamDashboardStoreDependencies = {
    authApiGateway: AuthApiGateway
    apiClient: any;

}