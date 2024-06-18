import { buildSelector } from "@/shared/lib/store";
import { EmployeeSortField } from "@/entities/Employee";
export const selectPayrollPageState = (state) => state.payrollPage;
export const getPayrollPageIsLoading = (state) => state.payrollPage?.isLoading || false;
export const getPayrollPageError = (state) => state.payrollPage?.error;
export const getPayrollPagePageNumber = (state) => state.payrollPage?.pageNumber || 1;
export const getPayrollPageSize = (state) => state.payrollPage?.pageSize || 10;
export const getPayrollPageHasMore = (state) => state.payrollPage?.hasMore;
export const getPayrollPageInitited = (state) => state.payrollPage?._inited;
export const getPayrollPageOrder = (state) => state.payrollPage?.order ?? "asc";
export const getPayrollPageSort = (state) => state.payrollPage?.sort ?? EmployeeSortField.LASTNAME;
export const getPayrollPageSearch = (state) => state.payrollPage?.search ?? "";
export const [useEmployeeById] = buildSelector((state, id) => state.payrollPage?.entities[id]);
