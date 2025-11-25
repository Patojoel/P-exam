import { createBrowserRouter } from "react-router";
import RootLayout from "./RootLayout";
import ErrorBoundaryView from "./ErrorBoundaryView";
import { AuthRouter } from "../../modules/auth/infra/router/router";
import { DashboardRouter } from "@/modules/dashboard/infra/router/router";
import type { AppStore } from "@/lib/store/store";
import { DashboardPartnersRouter } from "@/modules/dashboardPartners/infra/router/router";

export const Router = (store:AppStore) => {

    return createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            errorElement: <ErrorBoundaryView />,
            children: [
                // {
                //     path: "/",
                //     index: true,
                //     errorElement: <ErrorBoundaryView />,
                // },

                ...AuthRouter,
                ...DashboardRouter(store),
                ...DashboardPartnersRouter(store)
            ],
        },
    ]);
};

export type AppRouter = ReturnType<typeof Router>;
