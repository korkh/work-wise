import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignIn, User, userActions } from "@/entities/User";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { loginUserMutation } from "../../../../../entities/User/api/userAPI";
import { toast } from "react-toastify";

export const signInUser = createAsyncThunk<User, SignIn, ThunkConfig<string>>(
	"signIn/signInUser",
	async (authData, thunkApi) => {
		const { dispatch, rejectWithValue } = thunkApi;

		try {
			const response: User = await dispatch(
				loginUserMutation(authData)
			).unwrap();

			if (!response) {
				toast.error("User authentication failed");
				throw new Error("User authentication failed");
			}

			dispatch(userActions.setAuthData(response));
			// startRefreshTokenTimer(dispatch);

			return response;
		} catch (e) {
			console.error(e);
			toast.error("Failed to sign in");
			return rejectWithValue("Failed to sign in");
		}
	}
);
