import {configureStore} from "@reduxjs/toolkit"
import {trainingsApi} from "./apis/trainingsApi"
import {setupListeners} from "@reduxjs/toolkit/query";
import {authApi} from "./apis/authApi";

export const store = configureStore({
    reducer: {
        [trainingsApi.reducerPath]: trainingsApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(trainingsApi.middleware)
            .concat(authApi.middleware);
    },
});

setupListeners(store.dispatch);

export * from './apis/trainingsApi'
export * from './apis/authApi'
