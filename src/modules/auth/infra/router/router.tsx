import type { RouteObject } from "react-router";
import ErrorBoundaryView from "../../../../shared/router/ErrorBoundaryView";
import { AuthLayout } from "../../../layout/AuthLayout";
import { LoginUser } from "../ui/login/loginUser";
import { AuthRoutes } from "./routes";

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
    ],
  },
] as RouteObject[];
