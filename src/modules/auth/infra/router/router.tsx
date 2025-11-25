import type { RouteObject } from "react-router";
import ErrorBoundaryView from "../../../../shared/router/ErrorBoundaryView";
import { AuthLayout } from "../../../layout/AuthLayout";
import { LoginUser } from "../ui/login/loginUser";
import { AuthRoutes } from "./routes";
import { ViewForgetPassword } from "../ui/forgot-password/ViewForgotPassword";
import ProtectedRoute from "@/shared/router/ProtectedRoute";
import { DashboardRoutes } from "@/modules/dashboard/infra/router/routes";
import { APP_RESOURCE } from "@/shared/rbac/APP_RESOURCE";
import { PermissionAction } from "@/shared/rbac/PermissionAction";

export const AuthRouter = [
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <ErrorBoundaryView />,
    children: [
      {
        path: AuthRoutes.login,
        element: (
          // <ProtectedRoute
          //   action={PermissionAction.READ}
          //   retUrl={DashboardRoutes.base}
          //   resource={APP_RESOURCE.AUTH}
          // >
            <LoginUser />
          // </ProtectedRoute>
        ),
        errorElement: <ErrorBoundaryView />,
      },
      {
        path: AuthRoutes.forgotPassword,
        element: <ViewForgetPassword />,
        errorElement: <ErrorBoundaryView />,
      },
    ],
  },
] as RouteObject[];
