import {
	Reducer,
	ReducersMapObject,
	UnknownAction,
	combineReducers,
} from "@reduxjs/toolkit";
import {
	MountedReducers,
	ReducerManager,
	StateSchema,
	StateSchemaKey,
} from "./StateSchema";

export function createReducerManager(
	initialRedicers: ReducersMapObject<StateSchema>
): ReducerManager {
	const reducers: ReducersMapObject<StateSchema> = { ...initialRedicers };

	let combinedReducer = combineReducers(reducers);

	let schemaKeysToRemove: Array<StateSchemaKey> = [];
	const mountedReducers: MountedReducers = {};

	return {
		getReducerMap: () => reducers,
		getMountedReducers: () => mountedReducers,
		reduce: (state: StateSchema, action: UnknownAction) => {
			if (schemaKeysToRemove.length > 0) {
				state = { ...state };
				schemaKeysToRemove.forEach((key) => {
					delete state[key];
				});
				schemaKeysToRemove = [];
			}
			return combinedReducer(state, action);
		},
		add: (key: StateSchemaKey, reducer: Reducer) => {
			if (!key || reducers[key]) {
				return;
			}
			reducers[key] = reducer;
			mountedReducers[key] = true;

			combinedReducer = combineReducers(reducers);
		},
		remove: (key: StateSchemaKey) => {
			if (!key || !reducers[key]) {
				return;
			}
			delete reducers[key];
			schemaKeysToRemove.push(key);
			mountedReducers[key] = false;

			combinedReducer = combineReducers(reducers);
		},
	};
}
