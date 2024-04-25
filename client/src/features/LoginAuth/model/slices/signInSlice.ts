import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SignInSchema } from "../..";
import { signInUser } from "../services/signIn/signInUser";
import { User } from "@/entities/User";
import {
	TOKEN_LOCALSTORAGE_KEY,
	USER_LOCALSTORAGE_KEY,
} from "@/shared/consts/localStorage";

const initialState: SignInSchema = {
	isLoading: false,
	email: "",
	password: "",
	user: null,
};

export const signInSlice = createSlice({
	name: "signIn",
	initialState,
	reducers: {
		setEmail: (state, action: PayloadAction<string>) => {
			state.email = action.payload;
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(signInUser.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(
				signInUser.fulfilled,
				(state, { payload }: PayloadAction<User>) => {
					state.isLoading = false;
					const claims = JSON.parse(atob(payload.token.split(".")[1]));
					const roles =
						claims["role"] ||
						claims[
							"http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
						];
					const email =
						claims["email"] ||
						claims[
							"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
						];
					const nameId =
						claims["nameid"] ||
						claims[
							"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
						];
					state.user = {
						...payload,
						id: nameId,
						email: email,
						roles: typeof roles === "string" ? [roles] : roles,
					};
					localStorage.setItem(
						USER_LOCALSTORAGE_KEY,
						JSON.stringify(state.user)
					);
					localStorage.setItem(
						TOKEN_LOCALSTORAGE_KEY,
						JSON.stringify(state.user.token)
					);
				}
			)
			.addCase(signInUser.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { reducer: signInReducer, actions: signInActions } = signInSlice;
