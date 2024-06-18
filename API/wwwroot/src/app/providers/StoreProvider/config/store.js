import { configureStore } from "@reduxjs/toolkit";
import { $api } from "@/shared/api/api";
import { rtkApi } from "@/shared/api/rtkApi";
import { userReducer } from "@/entities/User";
import { createReducerManager } from "./reducerManager";
import { uiReducer } from "@/features/UI";
export function createReduxStore(initialState, asyncReducers) {
    const rootReducers = {
        ...asyncReducers,
        user: userReducer,
        ui: uiReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };
    const reducerManager = createReducerManager(rootReducers);
    const extraArg = {
        api: $api,
    };
    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }).concat(rtkApi.middleware),
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;
    return store;
}
