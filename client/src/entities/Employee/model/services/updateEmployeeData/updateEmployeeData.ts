import { createAsyncThunk } from "@reduxjs/toolkit";
import { Employee } from "../../types/Employee";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { TOKEN_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
import { getEmployeeForm } from "../../selectors/employeeDetails";
import { validateEmployeeData } from "../validateEmployeeData/validateEmployeeData";
import { ValidateEmployeeError } from "../../consts/validateEmployeeError";

export const updateEmployeeData = createAsyncThunk<
	Employee,
	void,
	ThunkConfig<ValidateEmployeeError[]>
>("employeeDetails/updateEmployeeData", async (_, thunkApi) => {
	const { extra, rejectWithValue, getState } = thunkApi;

	const formData = getEmployeeForm(getState());

	const errors = validateEmployeeData(formData);

	if (errors.length) {
		return rejectWithValue(errors);
	}

	const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
	if (!token) {
		return rejectWithValue([ValidateEmployeeError.NO_DATA]);
	}

	try {
		const decodedToken = JSON.parse(token);
		if (!decodedToken) {
			return rejectWithValue([ValidateEmployeeError.NO_DATA]);
		}

		const response = await extra.api.put<Employee>(
			`/employees/${formData?.id}`,
			formData,
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
		console.error("Failed to update employee data!", error);
		return rejectWithValue([ValidateEmployeeError.SERVER_ERROR]);
	}
});
