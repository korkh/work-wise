import { combineReducers, } from "@reduxjs/toolkit";
export function createReducerManager(initialRedicers) {
    const reducers = { ...initialRedicers };
    let combinedReducer = combineReducers(reducers);
    let schemaKeysToRemove = [];
    const mountedReducers = {};
    return {
        getReducerMap: () => reducers,
        getMountedReducers: () => mountedReducers,
        reduce: (state, action) => {
            if (schemaKeysToRemove.length > 0) {
                state = { ...state };
                schemaKeysToRemove.forEach((key) => {
                    delete state[key];
                });
                schemaKeysToRemove = [];
            }
            return combinedReducer(state, action);
        },
        add: (key, reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            mountedReducers[key] = true;
            combinedReducer = combineReducers(reducers);
        },
        remove: (key) => {
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
