import { createBrowserRouter } from "react-router";
import RootLayout from "./RootLayout";
import ErrorBoundaryView from "./ErrorBoundaryView";
import { AuthRouter } from "../../modules/auth/infra/router/router";
import { DashboardRouter } from "@/modules/dashboard/infra/router/router";

export const Router = () => {

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
                ...DashboardRouter
            ],
        },
    ]);
};

export type AppRouter = ReturnType<typeof Router>;
