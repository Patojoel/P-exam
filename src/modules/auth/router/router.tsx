import { RouteObject } from "react-router";
import ErrorBoundaryView from "../../../shared/router/ErrorBoundaryView";
import ProtectedRoute from "../../../shared/router/ProtectedRoute";
import { AuthLayout } from "../../layout/AuthLayout";
import { LoginUser } from "../infra/ui/login/loginUser";
import { AuthRoutes } from "./routes";

export const AuthRouter = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AuthLayout />
      </ProtectedRoute>
    ),
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
