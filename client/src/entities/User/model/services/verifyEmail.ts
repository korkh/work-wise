import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { useVerifyEmailMutation } from "dist/src/entities/User/api/userAPI";

export const verifyEmail = createAsyncThunk(
	"user/verifyEmail",
	async (data: { token: string; email: string }, { rejectWithValue }) => {
		try {
			const [verifyEmail] = useVerifyEmailMutation();
			await verifyEmail(data).unwrap();
			return;
		} catch (error) {
			const customError: AxiosError = error as AxiosError;
			return rejectWithValue({ error: customError.message });
		}
	}
);
