import { SortOrder } from "@/shared/types/sort";
import { BusinessTrip } from "./BusinessTrip";
import { ValidateBusinessTripError } from "../consts/validate_businessTrips";
import { BusinessTripSortField } from "../consts/businessTrip_consts";

export interface BusinessTripDetailsSchema {
	isLoading: boolean;
	error?: string;
	data?: BusinessTrip;
	form?: BusinessTrip;
	readonly: boolean;
	validateErrors?: ValidateBusinessTripError[];
}

export interface BusinessTripParams {
	token: string;
	pageNumber: number;
	pageSize: number;
	sort: BusinessTripSortField;
	order: SortOrder;
	search?: string;
	type?: string;
}
