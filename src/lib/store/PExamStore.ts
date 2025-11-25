
import {PExamDashboardExtraArgumentDependencies} from "@/lib/store/dependencies/dependencies.ts";
import {createStore} from "@/lib/store/store.ts";
import {setupListeners} from "@reduxjs/toolkit/query";

export const PExamStore = createStore(PExamDashboardExtraArgumentDependencies);
setupListeners(PExamStore.dispatch);
