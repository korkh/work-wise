import { UserSchema } from "@/entities/User";
import { rtkApi } from "@/shared/api/rtkApi";
import {
	EnhancedStore,
	Reducer,
	ReducersMapObject,
	UnknownAction,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { CombinedState } from "../types/stateTypes";
import { UISchema } from "@/features/UI";
import { SignInSchema } from "@/features/LoginAuth";
import { EmployeeDetailsSchema } from "@/entities/Employee";
import { PayrollPageSchema } from "@/pages/PayrollsData";
import { EmployeePageSchema } from "@/pages/EmployeesData";
import { DocumentPageSchema } from "@/pages/DocumentsData";
import { EmployeeTimeCardSchema } from "@/pages/EmployeeTimeCardPage";
import { DocumentSchema } from "@/entities/Document";
import { BusinessTripDetailsSchema } from "@/entities/BusinessTrip";
import { BusinessTripPageSchema } from "@/pages/BusinessTripsData";

export interface StateSchema {
	user: UserSchema;
	ui: UISchema;

	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

	//Async reducers
	signInForm: SignInSchema;
	employeePage: EmployeePageSchema;
	documentPage: DocumentPageSchema;
	documentDetails: DocumentSchema;
	payrollPage: PayrollPageSchema;
	employeeDetails: EmployeeDetailsSchema;
	businessTripPage: BusinessTripPageSchema;
	businessTripDetails: BusinessTripDetailsSchema;
	employeeTimeCard: EmployeeTimeCardSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (
		state: StateSchema,
		action: UnknownAction
	) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
	// true - mounted, false - unmounted
	getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
	api: AxiosInstance;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	state: StateSchema;
}
