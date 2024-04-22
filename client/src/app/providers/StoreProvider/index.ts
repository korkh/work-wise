import type {
	StateSchema,
	ThunkConfig,
	StateSchemaKey,
	ReduxStoreWithManager,
} from "./config/StateSchema";
import { createReduxStore } from "./config/store";
import { AppDispatch } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";

export { StoreProvider, createReduxStore };
export type {
	StateSchema,
	ThunkConfig,
	AppDispatch,
	StateSchemaKey,
	ReduxStoreWithManager,
};
