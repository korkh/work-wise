import { SortOrder } from "@/shared/types/sort";
import { EmployeeDocument } from "./EmployeeDocument";
import { DocumentSortField } from "../consts/document_consts";
import { ValidateDocumentError } from "../consts/validateDocumentError";

export interface DocumentSchema {
	isLoading: boolean;
	error?: string;
	data?: EmployeeDocument;
	form?: EmployeeDocument;
	readonly: boolean;
	validateErrors?: ValidateDocumentError[];
}

export interface DocumentParams {
	token: string;
	pageNumber: number;
	pageSize: number;
	sort: DocumentSortField;
	order: SortOrder;
	search?: string;
	type?: string;
}
