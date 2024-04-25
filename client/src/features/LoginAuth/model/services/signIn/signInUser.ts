import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignIn, User, userActions } from "@/entities/User";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { loginUserMutation } from "../../../../../entities/User/api/userAPI";

export const signInUser = createAsyncThunk<User, SignIn, ThunkConfig<string>>(
	"signIn/signInUser",
	async (authData, thunkApi) => {
		const { dispatch, rejectWithValue } = thunkApi;

		try {
			const response: User = await dispatch(
				loginUserMutation(authData)
			).unwrap();

			if (!response) {
				throw new Error();
			}

			dispatch(userActions.setAuthData(response));

			return response;
		} catch (e) {
			console.error(e);
			return rejectWithValue("");
		}
	}
);
