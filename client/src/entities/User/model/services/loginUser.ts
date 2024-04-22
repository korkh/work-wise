import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { useLoginUserMutation } from "dist/src/entities/User/api/userAPI";

export const loginUser = createAsyncThunk(
	"user/login",
	async (data: { email: string; password: string }, { rejectWithValue }) => {
		try {
			const [loginUser] = useLoginUserMutation();
			const result = await loginUser(data).unwrap();
			return result;
		} catch (error) {
			const customError: AxiosError = error as AxiosError;
			return rejectWithValue({ error: customError.message });
		}
	}
);
