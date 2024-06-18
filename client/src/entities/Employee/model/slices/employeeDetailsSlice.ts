import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EmployeeDetailsSchema } from "../types/EmployeeSchema";
import { fetchEmployeeByID } from "../services/fetchEmployeeById/fetchEmployeeById";
import { Employee } from "../types/Employee";
import { updateEmployeeData } from "../services/updateEmployeeData/updateEmployeeData";

const initialState: EmployeeDetailsSchema = {
	isLoading: false,
	readonly: true,
	error: undefined,
	data: undefined,
};

export const employeeDetailsSlice = createSlice({
	name: "employeeDetails",
	initialState,
	reducers: {
		setReadonly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload;
		},
		cancelEdit: (state) => {
			state.readonly = true;
			state.validateErrors = undefined;
			state.form = state.data;
		},
		updateEmployee: (state, action: PayloadAction<Partial<Employee>>) => {
			const { id, ...rest } = action.payload;
			if (state.form && id !== undefined) {
				state.form.id = id;
				state.form = {
					...state.form,
					...rest,
				};
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchEmployeeByID.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(
				fetchEmployeeByID.fulfilled,
				(state, action: PayloadAction<Employee>) => {
					state.isLoading = false;
					state.data = action.payload;
					state.form = action.payload;
				}
			)
			.addCase(fetchEmployeeByID.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(updateEmployeeData.pending, (state) => {
				state.validateErrors = undefined;
				state.isLoading = true;
			})
			.addCase(
				updateEmployeeData.fulfilled,
				(state, action: PayloadAction<Employee>) => {
					state.isLoading = false;
					state.data = action.payload;
					state.form = action.payload;
					state.readonly = true;
					state.validateErrors = undefined;
				}
			)
			.addCase(updateEmployeeData.rejected, (state, action) => {
				state.isLoading = false;
				state.validateErrors = action.payload;
			});
	},
});

export const {
	actions: employeeDetailsActions,
	reducer: employeeDetailsReducer,
} = employeeDetailsSlice;
