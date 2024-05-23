import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { Reducer } from "redux";

import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { $api } from "@/shared/api/api";
import { rtkApi } from "@/shared/api/rtkApi";
import { CombinedState } from "../types/stateTypes";
import { userReducer } from "@/entities/User";
import { createReducerManager } from "./reducerManager";
import { uiReducer } from "@/features/UI";
import { employeeTimeCardReducer } from "@/entities/Employee";

export function createReduxStore(
	initialState: StateSchema,
	asyncReducers: ReducersMapObject<StateSchema>
) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		user: userReducer,
		ui: uiReducer,
		employeeTimeCard: employeeTimeCardReducer,
		[rtkApi.reducerPath]: rtkApi.reducer,
	};

	const reducerManager = createReducerManager(rootReducers);

	const extraArg: ThunkExtraArg = {
		api: $api,
	};

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
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

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
