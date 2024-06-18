import { createAsyncThunk } from "@reduxjs/toolkit";
import { TOKEN_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
import { toast } from "react-toastify";
import { userActions } from "../slice/UserSlice";
import { startRefreshTokenTimer, stopRefreshTokenTimer, } from "@/shared/lib/utils/url/refreshTokenTimer/refreshTokenTimer";
import { refreshTokenMutation } from "../../api/userAPI";
export const refreshToken = createAsyncThunk("user/refreshToken", async (_, { rejectWithValue, dispatch }) => {
    stopRefreshTokenTimer();
    const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
    if (!token) {
        toast.error("User not found!");
        return rejectWithValue("User not found");
    }
    try {
        const user = await dispatch(refreshTokenMutation(token)).unwrap();
        dispatch(userActions.setAuthData(user));
        console.log("Refresh token processed in initUserData.ts");
        startRefreshTokenTimer(dispatch, user.token);
        return user;
    }
    catch (error) {
        console.error("Failed to refresh token!", error);
        toast.error("Failed to refresh token!");
        return rejectWithValue("Failed to refresh token");
    }
});
