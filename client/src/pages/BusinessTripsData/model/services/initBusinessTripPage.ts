import { ThunkConfig } from "@/app/providers/StoreProvider";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBusinessTripPageInitited } from "../selectors/businessTripPageSelectors";
import { SortOrder } from "@/shared/types/sort";
import { BusinessTripSortField } from "@/entities/BusinessTrip";
import { businessTripPageActions } from "../slices/businessTripPageSlice";
import { fetchBusinessTripsList } from "./fetchBusinessTripsList";

export const initBusinessTripPage = createAsyncThunk<
	void,
	URLSearchParams,
	ThunkConfig<string>
>("businessTripPage/initBusinessTripPage", async (searchParams, thunkApi) => {
	const { getState, dispatch } = thunkApi;
	const inited = getBusinessTripPageInitited(getState());

	if (!inited) {
		const orderFromUrl = searchParams.get("order") as SortOrder;
		const sortFromUrl = searchParams.get("sort") as BusinessTripSortField;
		const searchFromUrl = searchParams.get("search");

		if (orderFromUrl) {
			dispatch(businessTripPageActions.setOrder(orderFromUrl));
		}
		if (sortFromUrl) {
			dispatch(businessTripPageActions.setSort(sortFromUrl));
		}
		if (searchFromUrl) {
			dispatch(businessTripPageActions.setSearch(searchFromUrl));
		}

		dispatch(businessTripPageActions.initState());
		dispatch(fetchBusinessTripsList({}));
	}
});
