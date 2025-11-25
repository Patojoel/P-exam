
import {addListener, createListenerMiddleware, type ListenerEffectAPI, type TypedStartListening} from '@reduxjs/toolkit'
import type {AppDispatch, RootState} from "./reducers";
import type {PExamDashboardStoreDependencies} from "./dependencies/dependencies";


export const listenerMiddleware = createListenerMiddleware();


export const startAppListening = listenerMiddleware.startListening as AppStartListening

export const addAppListener = addListener.withTypes<RootState, AppDispatch>();

export type ListenerEffectTypeAPI = ListenerEffectAPI<RootState, AppDispatch, PExamDashboardStoreDependencies>;

export type AppStartListening = TypedStartListening<RootState, AppDispatch, PExamDashboardStoreDependencies>;
