import { createAsyncThunk } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
export const initAuthData = createAsyncThunk("user/initAuthData", async (_, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;
    const token = localStorage.getItem(USER_LOCALSTORAGE_KEY);
    if (!token) {
        return rejectWithValue("");
    }
    try {
        const response = await dispatch(getUserDataByIdQuery(token)).unwrap();
        return response;
    }
    catch (e) {
        console.log(e);
        return rejectWithValue("");
    }
});
