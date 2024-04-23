import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SignInSchema } from "../..";
import { signInUser } from "../services/signIn/signInUser";

const initialState: SignInSchema = {
	isLoading: false,
	email: "",
	password: "",
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
			.addCase(signInUser.fulfilled, (state, _) => {
				state.isLoading = false;
			})
			.addCase(signInUser.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { reducer: signInReducer, actions: signInActions } = signInSlice;
