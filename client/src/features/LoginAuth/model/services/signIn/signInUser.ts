import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignIn, User, userActions } from "@/entities/User";
import { ThunkConfig } from "@/app/providers/StoreProvider";

export const signInUser = createAsyncThunk<User, SignIn, ThunkConfig<string>>(
	"signIn/signInByEmailPassword",
	async (authData, thunkApi) => {
		const { extra, dispatch, rejectWithValue } = thunkApi;

		try {
			const response = await extra.api.post<User>("/account/login", authData);

			if (!response.data) {
				throw new Error();
			}

			dispatch(userActions.setAuthData(response.data));
			return response.data;
		} catch (error) {
			const customError: string = error as string;
			console.log(error);
			return rejectWithValue(customError);
		}
	}
);
