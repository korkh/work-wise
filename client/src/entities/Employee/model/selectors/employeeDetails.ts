import { StateSchema } from "@/app/providers/StoreProvider";

export const getEmployeeDetailsData = (state: StateSchema) =>
	state.employeeDetails?.data;
export const getEmployeeDetailsIsLoading = (state: StateSchema) =>
	state.employeeDetails?.isLoading || false;
export const getEmployeeDetailsError = (state: StateSchema) =>
	state.employeeDetails?.error;
export const getEmployeeValidateErrors = (state: StateSchema) =>
	state.employeeDetails?.validateErrors;

export const getEmployeeForm = (state: StateSchema) =>
	state.employeeDetails?.form;

export const getEmployeeReadonly = (state: StateSchema) =>
	state.employeeDetails?.readonly;
