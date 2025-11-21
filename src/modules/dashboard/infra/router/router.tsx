import type { RouteObject } from "react-router";
import ErrorBoundaryView from "../../../../shared/router/ErrorBoundaryView";
import { DashboardLayout } from "@/modules/layout/DashboardLayout";
import { DashboardRoutes } from "./routes";
import { ViewDashboard } from "../ui/viewDashboard";
import { ViewPayments } from "@/modules/payments/infra/ui/ViewPayments";


export const DashboardRouter = [
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        errorElement: <ErrorBoundaryView />,
        children: [
            {
                path: DashboardRoutes.base,
                element: <ViewDashboard />,
                errorElement: <ErrorBoundaryView />,
            },
            {
                path: DashboardRoutes.payments,
                element: <ViewPayments />,
                errorElement: <ErrorBoundaryView />,

            }
        ],
    },
] as RouteObject[];
