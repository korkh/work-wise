import { DocumentSortField, EmployeeDocument } from "@/entities/Document";
import { SortOrder } from "@/shared/types/sort";
import { EntityState } from "@reduxjs/toolkit";

export interface DocumentPageSchema
	extends EntityState<EmployeeDocument, string> {
	isLoading?: boolean;
	error?: string;

	//pagination
	pageNumber: number;
	pageSize: number;
	hasMore: boolean;

	//filters
	order: SortOrder;
	sort: DocumentSortField;
	search: string;

	//anti extra renders
	_inited: boolean;
}
