import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { TOKEN_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
import { BusinessTrip } from "../types/BusinessTrip";

export const fetchBusinessTripById = createAsyncThunk<
	BusinessTrip,
	string | undefined,
	ThunkConfig<string>
>("businessTrip/fetchBusineesTripById", async (bTripId, thunkApi) => {
	const { extra, rejectWithValue } = thunkApi;

	const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
	if (!token) {
		return rejectWithValue("User not found");
	}

	try {
		if (!bTripId) {
			throw new Error();
		}

		const decodedToken = JSON.parse(token);
		if (!decodedToken) {
			return rejectWithValue("Invalid token data");
		}

		const bTrip = await extra.api.get<BusinessTrip>(
			`/businesstrip/${bTripId}`,
			{
				headers: {
					Authorization: `Bearer ${decodedToken}`,
				},
			}
		);

		if (!bTrip.data) {
			throw new Error();
		}
		console.log("RESPONSE IN fetchBusinessTripByID", bTrip.data);
		return bTrip.data;
	} catch (error) {
		console.error("Failed to fetch business trip data!", error);
		return rejectWithValue("Failed to fetch business data");
	}
});
