import { ThunkConfig } from "@/app/providers/StoreProvider";
import { BusinessTrip } from "@/entities/BusinessTrip";
import { TOKEN_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	getBusinessTripPageSize,
	getBusinessTripPageSort,
	getBusinessTripPageOrder,
	getBusinessTripPagePageNumber,
	getBusinessTripPageSearch,
} from "../selectors/businessTripPageSelectors";
import { addQueryParams } from "@/shared/lib/utils/url/addQueryParams/addQueryParams";

interface FetchBusinessTripsListProps {
	replace?: boolean;
}

export const fetchBusinessTripsList = createAsyncThunk<
	BusinessTrip[],
	FetchBusinessTripsListProps,
	ThunkConfig<string>
>("businessTripPage/fetchBusinessTripsList", async (_, thunkApi) => {
	const { extra, rejectWithValue, getState } = thunkApi;
	const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
	const pageSize = getBusinessTripPageSize(getState());
	const sort = getBusinessTripPageSort(getState());
	const order = getBusinessTripPageOrder(getState());
	const pageNumber = getBusinessTripPagePageNumber(getState());
	const search = getBusinessTripPageSearch(getState());

	try {
		if (!token) {
			throw new Error("No token found");
		}

		addQueryParams({
			sort,
			order,
			search,
		});

		const response = await extra.api.get<BusinessTrip[]>("/businesstrips", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			params: {
				_expand: "user",
				_pageNumber: pageNumber,
				_pageSize: pageSize,
				_sort: sort,
				_order: order,
				q: search,
			},
		});

		if (!response.data) {
			throw new Error();
		}
		return response.data;
	} catch (e) {
		return rejectWithValue("No response from server");
	}
});
