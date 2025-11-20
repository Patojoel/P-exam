import { createBrowserRouter } from "react-router";
import RootLayout from "./RootLayout";
import ErrorBoundaryView from "./ErrorBoundaryView";
import { AuthRouter } from "../../modules/auth/infra/ui/login/router/router";

export const Router = () => {

    return createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            errorElement: <ErrorBoundaryView />,
            children: [
                {
                    path: "/",
                    index: true,
                    errorElement: <ErrorBoundaryView />,
                },

                ...AuthRouter,

                ],
        },
    ]);
};

export type AppRouter = ReturnType<typeof Router>;
