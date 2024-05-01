import { StateSchema } from "@/app/providers/StoreProvider";
import { EmployeeSortField } from "@/entities/Employee";
import { buildSelector } from "@/shared/lib/store";

export const getEmployeesPageIsLoading = (state: StateSchema) =>
	state.employeePage?.isLoading || false;
export const getEmployeesPageError = (state: StateSchema) =>
	state.employeePage?.error;
export const getEmployeesPagePageNumber = (state: StateSchema) =>
	state.employeePage?.pageNumber || 1;
export const getEmployeesPageSize = (state: StateSchema) =>
	state.employeePage?.pageSize || 10;
export const getEmployeesPageHasMore = (state: StateSchema) =>
	state.employeePage?.hasMore;
export const getEmployeesPageInitited = (state: StateSchema) =>
	state.employeePage?._inited;
export const getEmployeesPageOrder = (state: StateSchema) =>
	state.employeePage?.order ?? "asc";
export const getEmployeesPageSort = (state: StateSchema) =>
	state.employeePage?.sort ?? EmployeeSortField.LASTNAME;
export const getEmployeesPageSearch = (state: StateSchema) =>
	state.employeePage?.search ?? "";
export const [useEmployeeById] = buildSelector(
	(state, id: string) => state.employeePage?.entities[id]
);
