import { SortOrder } from "@/shared/types/sort";
import { EmployeeSortField } from "../consts/employee_consts";
import { Employee } from "./Employee";
import { ValidateEmployeeError } from "../consts/validateEmployeeError";

export interface EmployeeDetailsSchema {
	isLoading: boolean;
	error?: string;
	data?: Employee;
	form?: Employee;
	readonly: boolean;
	validateErrors?: ValidateEmployeeError[];
}

export interface EmployeeParams {
	token: string;
	pageNumber: number;
	pageSize: number;
	sort: EmployeeSortField;
	order: SortOrder;
	search?: string;
	type?: string;
}
