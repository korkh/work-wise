import { buildSelector } from "@/shared/lib/store";
import { StateSchema } from "@/app/providers/StoreProvider";
import { BusinessTripSortField } from "@/entities/BusinessTrip";

export const getBusinessTripPageIsLoading = (state: StateSchema) =>
	state.businessTripPage?.isLoading || false;

export const getBusinessTripPageError = (state: StateSchema) =>
	state.businessTripPage?.error;

export const getBusinessTripPagePageNumber = (state: StateSchema) =>
	state.businessTripPage?.pageNumber || 1;

export const getBusinessTripPageSize = (state: StateSchema) =>
	state.businessTripPage?.pageSize || 10;

export const getBusinessTripPageHasMore = (state: StateSchema) =>
	state.businessTripPage?.hasMore;

export const getBusinessTripPageInitited = (state: StateSchema) =>
	state.businessTripPage?._inited;

export const getBusinessTripPageOrder = (state: StateSchema) =>
	state.businessTripPage?.order ?? "asc";

export const getBusinessTripPageSort = (state: StateSchema) =>
	state.businessTripPage?.sort ?? BusinessTripSortField.laikotarpis;

export const getBusinessTripPageSearch = (state: StateSchema) =>
	state.businessTripPage?.search ?? "";

export const [useBusinessTripById] = buildSelector(
	(state, id: string) => state.businessTripPage?.entities[id]
);
