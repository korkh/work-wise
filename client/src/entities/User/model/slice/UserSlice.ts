import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initAuthData } from "../services/initAuthData";
import { User, UserSchema } from "../types/User";
import { TOKEN_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
import { safeJSONParse } from "@/shared/lib/utils/safeParse/safeParse";

const initialState: UserSchema = {
	authData: null,
	_inited: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setAuthData: (state, { payload }: PayloadAction<User>) => {
			const [parseError, claims] = safeJSONParse(
				atob(payload.token.split(".")[1])
			);
			if (parseError) {
				console.error("Failed to parse claims from token", parseError);
				return;
			}
			const roles =
				claims["role"] ||
				claims["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
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
			state.authData = {
				...payload,
				id: nameId,
				email: email,
				roles: Array.isArray(roles) ? roles : [roles],
			};
			localStorage.setItem(
				TOKEN_LOCALSTORAGE_KEY,
				JSON.stringify(state.authData.token)
			);
		},
		signOut: (state) => {
			state.authData = null;
			localStorage.removeItem(TOKEN_LOCALSTORAGE_KEY);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(initAuthData.rejected, (state) => {
			state._inited = true;
		});
		builder.addCase(
			initAuthData.fulfilled,
			(state, { payload }: PayloadAction<User>) => {
				const [parseError, claims] = safeJSONParse(
					atob(payload.token.split(".")[1])
				);
				if (parseError) {
					console.error("Failed to parse claims from token", parseError);
					return;
				}
				const roles =
					claims[
						"http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
					];
				const email =
					claims[
						"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
					];
				state.authData = {
					...payload,
					email: typeof email === "string" ? [email] : email,
					roles: typeof roles === "string" ? [roles] : roles,
				};
				state._inited = true;
			}
		);
	},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
