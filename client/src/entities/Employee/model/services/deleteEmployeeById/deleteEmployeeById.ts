import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { TOKEN_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
import { ValidateEmployeeError } from "../../consts/validateEmployeeError";
import { toast } from "react-toastify";

export const deleteEmployeeById = createAsyncThunk<
	string,
	string,
	ThunkConfig<ValidateEmployeeError[]>
>("employeeDetails/deleteEmployeeById", async (employeeId, thunkApi) => {
	const { extra, rejectWithValue } = thunkApi;

	const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
	if (!token) {
		return rejectWithValue([ValidateEmployeeError.NO_DATA]);
	}

	try {
		const decodedToken = JSON.parse(token);
		if (!decodedToken) {
			return rejectWithValue([ValidateEmployeeError.NO_DATA]);
		}

		const response = await extra.api.delete<void>(`/employees/${employeeId}`, {
			headers: {
				Authorization: `Bearer ${decodedToken}`,
			},
		});

		if (response.status !== 204 && response.status !== 200) {
			throw new Error();
		}

		return employeeId;
	} catch (error) {
		toast.error("Failed to delete employee data!");
		console.error("Failed to delete employee data!", error);
		return rejectWithValue([ValidateEmployeeError.SERVER_ERROR]);
	}
});
