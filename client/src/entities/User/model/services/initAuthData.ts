import { createAsyncThunk } from "@reduxjs/toolkit";
import { TOKEN_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
import { User } from "../types/User";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { getCurrentUserMutation } from "../../api/userAPI";
import { toast } from "react-toastify";

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
	"user/initAuthData",
	async (_, thunkApi) => {
		const { rejectWithValue, dispatch } = thunkApi;

		const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);

		if (!token) {
			toast("User not found!");
			return rejectWithValue("User not found");
		}

		try {
			const getUser = await dispatch(getCurrentUserMutation(token)).unwrap();

			console.log(getUser);
			return getUser;
		} catch (e) {
			console.error(e);
			return rejectWithValue("");
		}
	}
);
