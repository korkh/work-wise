import { createAsyncThunk } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
import { User } from "../types/User";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { getCurrentUserQuery } from "../../api/userAPI";

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
	"user/initAuthData",
	async (_, thunkApi) => {
		const { rejectWithValue, dispatch } = thunkApi;

		const token = localStorage.getItem(USER_LOCALSTORAGE_KEY);

		if (!token) {
			return rejectWithValue("No token found");
		}

		try {
			const response = await dispatch(getCurrentUserQuery()).unwrap();

			return response;
		} catch (e) {
			console.log(e);
			return rejectWithValue("");
		}
	}
);
