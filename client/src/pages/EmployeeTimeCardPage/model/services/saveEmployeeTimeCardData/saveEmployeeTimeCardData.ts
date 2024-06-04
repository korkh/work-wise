import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { getEmployeeTimeCardForm } from "../../selectors/employeeTimeCard";
import { EmployeeTimeCard } from "../../types/EmployeeTimeCard";
import { TOKEN_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";

export const saveEmployeeTimeCardData = createAsyncThunk<
	EmployeeTimeCard[],
	void,
	ThunkConfig<string>
>("employeeTimeCardPage/saveData", async (_, thunkApi) => {
	const { rejectWithValue, getState, extra } = thunkApi;
	let formData = getEmployeeTimeCardForm(getState());

	formData = formData?.map((employeeTimeCard) => ({
		...employeeTimeCard,
		workingStates: employeeTimeCard.workingStates.map((state) => ({
			...state,
			state: String(state.state),
			holiday: state.holiday,
		})),
	}));

	const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
	if (!token) {
		return rejectWithValue("No valid token found in local storage");
	}

	try {
		const decodedToken = JSON.parse(token);
		if (!decodedToken) {
			return rejectWithValue("No valid token found");
		}

		const response = await extra.api.put<EmployeeTimeCard[]>(
			`/timecards`,
			formData,
			{
				headers: {
					Authorization: `Bearer ${decodedToken}`,
				},
			}
		);

		return response.data;
	} catch (e) {
		console.error("Save failed: ", e);
		return rejectWithValue("Failed to save data");
	}
});
