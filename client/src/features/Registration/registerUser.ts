import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { useRegisterUserMutation } from "dist/src/entities/User/api/userAPI";

export const registerUser = createAsyncThunk(
	"user/register",
	async (
		data: {
			displayName: string;
			email: string;
			password: string;
			userName: string;
		},
		{ rejectWithValue }
	) => {
		try {
			const [registerUser] = useRegisterUserMutation();
			const result = await registerUser(data).unwrap();
			return result;
		} catch (error) {
			const customError: AxiosError = error as AxiosError;
			return rejectWithValue({ error: customError.message });
		}
	}
);
