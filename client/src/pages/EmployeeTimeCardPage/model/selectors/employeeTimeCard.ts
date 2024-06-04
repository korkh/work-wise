import { StateSchema } from "@/app/providers/StoreProvider";

export const getEmployeeTimeCardData = (state: StateSchema) =>
	state.employeeTimeCard?.data;

export const getEmployeeTimeCardForm = (state: StateSchema) =>
	state.employeeTimeCard?.form;

export const getEmployeeTiemCardSelectedMonth = (state: StateSchema) =>
	state.employeeTimeCard?.selectedMonth;

export const getEmployeeTiemCardError = (state: StateSchema) =>
	state.employeeTimeCard?.error;

export const getEmployeeTiemCardIsLoading = (state: StateSchema) =>
	state.employeeTimeCard?.isLoading || false;
