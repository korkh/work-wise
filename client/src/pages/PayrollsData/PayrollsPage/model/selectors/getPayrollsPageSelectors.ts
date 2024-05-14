import { buildSelector } from "@/shared/lib/store";
import { StateSchema } from "@/app/providers/StoreProvider";
import { EmployeeSortField } from "@/entities/Employee";

export const selectPayrollPageState = (state: StateSchema) => state.payrollPage;

export const getPayrollPageIsLoading = (state: StateSchema) =>
	state.payrollPage?.isLoading || false;
export const getPayrollPageError = (state: StateSchema) =>
	state.payrollPage?.error;
export const getPayrollPagePageNumber = (state: StateSchema) =>
	state.payrollPage?.pageNumber || 1;
export const getPayrollPageSize = (state: StateSchema) =>
	state.payrollPage?.pageSize || 10;
export const getPayrollPageHasMore = (state: StateSchema) =>
	state.payrollPage?.hasMore;
export const getPayrollPageInitited = (state: StateSchema) =>
	state.payrollPage?._inited;
export const getPayrollPageOrder = (state: StateSchema) =>
	state.payrollPage?.order ?? "asc";
export const getPayrollPageSort = (state: StateSchema) =>
	state.payrollPage?.sort ?? EmployeeSortField.LASTNAME;
export const getPayrollPageSearch = (state: StateSchema) =>
	state.payrollPage?.search ?? "";
export const [useEmployeeById] = buildSelector(
	(state, id: string) => state.payrollPage?.entities[id]
);
