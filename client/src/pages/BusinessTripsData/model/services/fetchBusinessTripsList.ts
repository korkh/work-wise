import { ThunkConfig } from "@/app/providers/StoreProvider";
import { BusinessTrip } from "@/entities/BusinessTrip";
import { TOKEN_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	getBusinessTripPageSort,
	getBusinessTripPageOrder,
	getBusinessTripPageSearch,
} from "../selectors/businessTripPageSelectors";

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
	const sort = getBusinessTripPageSort(getState());
	const order = getBusinessTripPageOrder(getState());
	const search = getBusinessTripPageSearch(getState());

	try {
		if (!token) {
			throw new Error("No token found");
		}

		const response = await extra.api.get<BusinessTrip[]>("/businesstrips", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			params: {
				_expand: "user",
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
