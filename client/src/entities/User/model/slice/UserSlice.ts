import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initAuthData } from "../services/initAuthData";
import { User, UserSchema } from "../types/User";
import { USER_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";

const initialState: UserSchema = {
	authData: null,
	_inited: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setAuthData: (state, { payload }: PayloadAction<User>) => {
			const claims = JSON.parse(atob(payload.Token.split(".")[1]));
			const roles =
				claims["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
			const email =
				claims[
					"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
				];
			state.authData = {
				...payload,
				Email: typeof email === "string" ? [email] : email,
				Roles: typeof roles === "string" ? [roles] : roles,
			};

			localStorage.setItem(USER_LOCALSTORAGE_KEY, payload.Token);
		},
		signOut: (state) => {
			state.authData = null;
			localStorage.removeItem(USER_LOCALSTORAGE_KEY);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(
			initAuthData.fulfilled,
			(state, { payload }: PayloadAction<User>) => {
				state.authData = payload;
				state._inited = true;
			}
		);
		builder.addCase(initAuthData.rejected, (state) => {
			state._inited = true;
		});
	},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
