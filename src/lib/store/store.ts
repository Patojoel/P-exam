import { configureStore, type Middleware} from "@reduxjs/toolkit";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE,} from "redux-persist/es/constants";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import type {PExamDashboardStoreDependencies} from "@/lib/store/dependencies/dependencies.ts";
import {listenerMiddleware} from "@/lib/store/listener.ts";
import { rootReducer, type RootState } from "./reducers";
// import {isDevMode} from "@/lib/config/base.ts";
// Define a transform to intercept persistence

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const createStore = (
    extraArgument: PExamDashboardStoreDependencies,
    preloadedState?: Partial<RootState>,
    middlewares: Middleware<unknown, RootState, any>[] = []
) => {
    const actions: unknown[] = [];
    const logActionsMiddleware: Middleware = () => (next) => (action) => {
        actions.push(action);
        return next(action);
    };

    return configureStore({
        reducer: persistedReducer,
        // devTools: isDevMode,
        devTools:true,
        preloadedState: preloadedState as never,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument,
                },
                serializableCheck: {
                    ignoredActions: [
                        FLUSH,
                        REHYDRATE,
                        PAUSE,
                        PERSIST,
                        PURGE,
                        REGISTER,
                    ],
                },
                immutableCheck: {
                    warnAfter: 300,
                },
            }).concat(
                ...middlewares,
                logActionsMiddleware,
                listenerMiddleware.middleware),
    })
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = ReturnType<typeof createStore>