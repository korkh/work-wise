import { buildSelector } from "@/shared/lib/store";
import { BusinessTripSortField } from "@/entities/BusinessTrip";
export const getBusinessTripPageIsLoading = (state) => state.businessTripPage?.isLoading || false;
export const getBusinessTripPageError = (state) => state.businessTripPage?.error;
// export const getBusinessTripPagePageNumber = (state: StateSchema) =>
// 	state.businessTripPage?.pageNumber || 1;
// export const getBusinessTripPageSize = (state: StateSchema) =>
// 	state.businessTripPage?.pageSize || 10;
// export const getBusinessTripPageHasMore = (state: StateSchema) =>
// 	state.businessTripPage?.hasMore;
export const getBusinessTripPageInitited = (state) => state.businessTripPage?._inited;
export const getBusinessTripPageOrder = (state) => state.businessTripPage?.order ?? "asc";
export const getBusinessTripPageSort = (state) => state.businessTripPage?.sort ?? BusinessTripSortField.laikotarpis;
export const getBusinessTripPageSearch = (state) => state.businessTripPage?.search ?? "";
export const [useBusinessTripById] = buildSelector((state, id) => state.businessTripPage?.entities[id]);
