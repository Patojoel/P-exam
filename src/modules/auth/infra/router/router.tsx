import type { RouteObject } from "react-router";
import ErrorBoundaryView from "../../../../shared/router/ErrorBoundaryView";
import { AuthLayout } from "../../../layout/AuthLayout";
import { LoginUser } from "../ui/login/loginUser";
import { AuthRoutes } from "./routes";
import { ViewForgetPassword } from "../ui/forgot-password/ViewForgotPassword";

export const AuthRouter = [
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <ErrorBoundaryView />,
    children: [
      {
        path: AuthRoutes.login,
        element: <LoginUser />,
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
