import { SortOrder } from "@/shared/types/sort";
import { EmployeeSortField } from "../consts/employee_consts";
import { Employee } from "./Employee";

export interface EmployeeSchema {
	isLoading: boolean;
	error?: string;
	data?: Employee;
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
