import { createAsyncThunk } from "@reduxjs/toolkit";
import { TOKEN_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
import { ValidateBusinessTripError, getBusinessTripForm, validateBusinessTripData, } from "@/entities/BusinessTrip";
export const updateBusinessTripData = createAsyncThunk("businessTripPage/updateBusinessTripDetailsData", async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const formData = getBusinessTripForm(getState());
    const errors = validateBusinessTripData(formData);
    if (errors.length) {
        return rejectWithValue(errors);
    }
    const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
    if (!token) {
        return rejectWithValue([ValidateBusinessTripError.NO_DATA]);
    }
    try {
        const decodedToken = JSON.parse(token);
        if (!decodedToken) {
            return rejectWithValue([ValidateBusinessTripError.NO_DATA]);
        }
        const response = await extra.api.put(`/businesstrips/${formData?.id}`, formData, {
            headers: {
                Authorization: `Bearer ${decodedToken}`,
            },
        });
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    }
    catch (error) {
        console.error("Failed to fetch business trip data!", error);
        return rejectWithValue([ValidateBusinessTripError.SERVER_ERROR]);
    }
});
