import { Reducer } from "@reduxjs/toolkit";
import { PropsWithChildren, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

import {
	ReduxStoreWithManager,
	StateSchema,
	StateSchemaKey,
} from "@/app/providers/StoreProvider";

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
	//ensuring that the type associated with the key [name] in the StateSchema object is not null or undefined.
};
interface DynamicReducerLoaderProps {
	reducers: ReducersList;
	removeAfterUnmount?: boolean;
}

/**
 * This component is intended to be used as a wrapper around parts of the application that need dynamic loading and unloading of Redux modules (reducers).
 * It allows for a more flexible and dynamic structure where modules can be added or removed during runtime.
 *
 * @param props - The properties passed to the `DynamicReducerLoader` component.
 *   - `reducers`: An object containing reducer functions mapped by their respective keys.
 *   - `removeAfterUnmount` (optional): A boolean flag indicating whether to remove the reducers from the store after the component unmounts.
 *
 * @returns React component that dynamically loads and unloads Redux modules based on the provided props.
 */

export const DynamicReducerLoader = (
	props: PropsWithChildren<DynamicReducerLoaderProps>
) => {
	const { children, reducers, removeAfterUnmount = "true" } = props;

	const store = useStore() as ReduxStoreWithManager;

	const dispatch = useDispatch();

	useEffect(() => {
		const mountedReducers = store.reducerManager.getReducerMap();

		Object.entries(reducers).forEach(([name, reducer]) => {
			const mounted = mountedReducers[name as StateSchemaKey];
			// add new reducer if not in the list
			if (mounted !== reducer) {
				store.reducerManager.add(name as StateSchemaKey, reducer);
				dispatch({ type: `@INIT ${name} reducer` });
			}
		});

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name, _]) => {
					store.reducerManager.remove(name as StateSchemaKey);
					dispatch({ type: `@DESTROY ${name} reducer` });
				});
			}
		};
		// eslint-disable-next-line
	}, []);

	return <>{children}</>;
};
