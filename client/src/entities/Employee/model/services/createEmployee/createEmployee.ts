import { createAsyncThunk } from "@reduxjs/toolkit";
import { Employee } from "../../types/Employee";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { TOKEN_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
import { ValidateEmployeeError } from "../../consts/validateEmployeeError";

export const createEmployee = createAsyncThunk<
	Employee,
	Employee | undefined,
	ThunkConfig<ValidateEmployeeError[]>
>("employeeDetails/createEmployee", async (employeeData, thunkApi) => {
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

		const response = await extra.api.post<Employee>(
			`/employees`,
			employeeData,
			{
				headers: {
					Authorization: `Bearer ${decodedToken}`,
				},
			}
		);

		if (!response.data) {
			throw new Error();
		}
		return response.data;
	} catch (error) {
		console.error("Failed to create employee!", error);
		return rejectWithValue([ValidateEmployeeError.SERVER_ERROR]);
	}
});
