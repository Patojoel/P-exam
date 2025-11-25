import {type RouteObject } from "react-router";
import ErrorBoundaryView from "../../../../shared/router/ErrorBoundaryView";
import { DashboardLayout } from "@/modules/layout/DashboardLayout";
import { DashboardPartnersRoutes } from "./routes";
import type { AppStore } from "@/lib/store/store";
import ProtectedRoute from "@/shared/router/ProtectedRoute";
import { AuthRoutes } from "@/modules/auth/infra/router/routes";
import { APP_RESOURCE } from "@/shared/rbac/APP_RESOURCE";
import { PermissionAction } from "@/shared/rbac/PermissionAction";
import { ViewDashboardPartners } from "../ui/ViewDashboardPartners";
import { DashboardPartnersLayout } from "@/modules/layout/DashboardPartnersLayout";


export const DashboardPartnersRouter = (store: AppStore) => [
    {
        path: DashboardPartnersRoutes.base,
        element:
            // <ProtectedRoute action={PermissionAction.READ}
            //     retUrl={AuthRoutes.base}
            //     resource={APP_RESOURCE.DASHBOARD}>
            <DashboardPartnersLayout />,
        // </ProtectedRoute>,
        errorElement: <ErrorBoundaryView />,
        children: [

            {
                path: DashboardPartnersRoutes.base,
                element: <ViewDashboardPartners />,
                errorElement: <ErrorBoundaryView />,
            },

        ],
    },
] as RouteObject[];
