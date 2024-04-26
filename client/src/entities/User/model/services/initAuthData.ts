import { createAsyncThunk } from "@reduxjs/toolkit";
import { TOKEN_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
import { User } from "../types/User";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { getCurrentUserQuery } from "../../api/userAPI";
import { toast } from "react-toastify";
import { userActions } from "../slice/UserSlice";

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
	"user/initAuthData",
	async (_, { rejectWithValue, dispatch }) => {
		const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
		if (!token) {
			toast("User not found!");
			return rejectWithValue("User not found");
		}

		try {
			const decodedToken = JSON.parse(token);
			if (!decodedToken) {
				toast("Invalid token data!");
				return rejectWithValue("Invalid token data");
			}
			const user = await dispatch(getCurrentUserQuery(token)).unwrap();
			dispatch(userActions.setAuthData(user));
			// startRefreshTokenTimer(dispatch);
			return user;
		} catch (error) {
			console.error("Failed to fetch user data!", error);
			toast("Failed to fetch user data!");
			return rejectWithValue("Failed to fetch user data");
		}
	}
);
