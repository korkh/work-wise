import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignIn, User, userActions } from "@/entities/User";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { loginUserMutation } from "../../../../../entities/User/api/userAPI";
import { toast } from "react-toastify";
import { TOKEN_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
import { startRefreshTokenTimer } from "@/shared/lib/utils/url/refreshTokenTimer/refreshTokenTimer";

export const signInUser = createAsyncThunk<User, SignIn, ThunkConfig<string>>(
	"signIn/signInUser",
	async (authData, thunkApi) => {
		const { dispatch, rejectWithValue } = thunkApi;

		try {
			const response: User = await dispatch(
				loginUserMutation(authData)
			).unwrap();

			if (response && response.token) {
				localStorage.setItem(
					TOKEN_LOCALSTORAGE_KEY,
					JSON.stringify(response.token)
				);
				dispatch(userActions.setAuthData(response));
				startRefreshTokenTimer(dispatch, response.token);
			}

			return response;
		} catch (e) {
			console.error("Failed to sign in", e);
			toast.error("Failed to sign in");
			return rejectWithValue("Failed to sign in");
		}
	}
);
