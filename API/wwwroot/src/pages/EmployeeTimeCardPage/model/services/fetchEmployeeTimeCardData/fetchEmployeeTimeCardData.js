import { createAsyncThunk } from "@reduxjs/toolkit";
import { TOKEN_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
export const fetchEmployeeTimeCardData = createAsyncThunk("employeeTimeCardPage/fetchData", async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
    try {
        if (!token) {
            throw new Error("No token found");
        }
        const response = await extra.api.get("/timecards", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    }
    catch (e) {
        return rejectWithValue("No response from server");
    }
});
