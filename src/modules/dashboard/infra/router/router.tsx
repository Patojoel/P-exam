import { Navigate, type RouteObject } from "react-router";
import ErrorBoundaryView from "../../../../shared/router/ErrorBoundaryView";
import { DashboardLayout } from "@/modules/layout/DashboardLayout";
import { DashboardRoutes } from "./routes";
import { ViewDashboard } from "../ui/viewDashboard";
import { ViewPayments } from "@/modules/payments/infra/ui/ViewPayments";
import { ViewPartners } from "../../partners/infra/ui/ViewPartners";
import type { AppStore } from "@/lib/store/store";
import ProtectedRoute from "@/shared/router/ProtectedRoute";
import { AuthRoutes } from "@/modules/auth/infra/router/routes";
import { APP_RESOURCE } from "@/shared/rbac/APP_RESOURCE";
import { PermissionAction } from "@/shared/rbac/PermissionAction";


export const DashboardRouter = (store: AppStore) => [
    {
        path: DashboardRoutes.base,
        element: 
        // <ProtectedRoute action={PermissionAction.READ}
        //     retUrl={AuthRoutes.base}
        //     resource={APP_RESOURCE.DASHBOARD}>
            <DashboardLayout />,
        // </ProtectedRoute>,
        errorElement: <ErrorBoundaryView />,
        children: [
            // {
            //     index: true,
            //     element: <Navigate to={AuthRoutes.login} replace />,
            // },
            {
                path: DashboardRoutes.base,
                element: <ViewDashboard />,
                errorElement: <ErrorBoundaryView />,
            },
            {
                path: DashboardRoutes.payments,
                element: <ViewPayments />,
                errorElement: <ErrorBoundaryView />,

            },
            {
                path: DashboardRoutes.partners,
                element: <ViewPartners />
            }
        ],
    },
] as RouteObject[];
