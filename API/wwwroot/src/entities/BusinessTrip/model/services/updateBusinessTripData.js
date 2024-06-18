import { createAsyncThunk } from "@reduxjs/toolkit";
import { TOKEN_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
import { ValidateBusinessTripError } from "../consts/validate_businessTrips";
export const updateBusinessTripData = createAsyncThunk("businessTrips/updateBusinessTripData", async (businessTrip, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
    if (!token) {
        return rejectWithValue([ValidateBusinessTripError.NO_DATA]);
    }
    try {
        const decodedToken = JSON.parse(token);
        if (!decodedToken) {
            return rejectWithValue([ValidateBusinessTripError.NO_DATA]);
        }
        // Excluding the employee property
        const { employee, ...businessTripWithoutEmployee } = businessTrip;
        console.log(employee);
        const response = await extra.api.put(`/businesstrips/${businessTrip.id}`, businessTripWithoutEmployee, {
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
        console.error("Failed to update business trip data!", error);
        return rejectWithValue([ValidateBusinessTripError.SERVER_ERROR]);
    }
});
