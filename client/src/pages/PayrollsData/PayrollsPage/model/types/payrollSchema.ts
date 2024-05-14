import { Payroll } from "@/entities/Payroll";
import { SortOrder } from "@/shared/types/sort";
import { EntityState } from "@reduxjs/toolkit";
import { PayrollSortField } from "../consts/payroll_consts";

export interface PayrollPageSchema extends EntityState<Payroll, string> {
	isLoading?: boolean;
	error?: string;

	//pagination
	pageNumber: number;
	pageSize: number;
	hasMore: boolean;

	//filters
	order: SortOrder;
	sort: PayrollSortField;
	search: string;

	//anti extra renders
	_inited: boolean;
}
