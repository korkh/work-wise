import { Employee, EmployeeSortField } from "@/entities/Employee";

import { SortOrder } from "@/shared/types/sort";
import { EntityState } from "@reduxjs/toolkit";

export interface EmployeePageSchema extends EntityState<Employee, string> {
	isLoading?: boolean;
	error?: string;

	//pagination
	pageNumber: number;
	pageSize: number;
	hasMore: boolean;

	//filters
	order: SortOrder;
	sort: EmployeeSortField;
	search: string;

	//anti extra renders
	_inited: boolean;
}
