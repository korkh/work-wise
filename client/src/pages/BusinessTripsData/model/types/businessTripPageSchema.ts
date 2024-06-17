import { BusinessTrip, BusinessTripSortField } from "@/entities/BusinessTrip";
import { SortOrder } from "@/shared/types/sort";
import { EntityState } from "@reduxjs/toolkit";

export interface BusinessTripPageSchema
	extends EntityState<BusinessTrip, string> {
	isLoading?: boolean;
	error?: string;

	//pagination
	// pageNumber: number;
	// pageSize: number;
	// hasMore: boolean;

	//filters
	order: SortOrder;
	sort: BusinessTripSortField;
	search: string;

	//anti re-renders
	_inited: boolean;
}
