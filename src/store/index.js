import { configureStore } from "@reduxjs/toolkit"
import {trainingsApi} from "./apis/trainingsApi"
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [trainingsApi.reducerPath]: trainingsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(trainingsApi.middleware);
    },
});

setupListeners(store.dispatch);

export * from './apis/trainingsApi'
