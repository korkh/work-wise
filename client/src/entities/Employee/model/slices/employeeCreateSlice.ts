import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EmployeeDetailsSchema } from "../types/EmployeeSchema";
import { createEmployee } from "../services/createEmployee/createEmployee";
import { Employee } from "../types/Employee";
import { ValidateEmployeeError } from "../consts/validateEmployeeError";

const initialState: EmployeeDetailsSchema = {
	isLoading: false,
	readonly: false,
	error: undefined,
	data: undefined,
	form: undefined,
};

export const employeeDetailsSlice = createSlice({
	name: "employeeDetails",
	initialState,
	reducers: {
		setReadonly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload;
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
		resetForm: (state) => {
			state.form = initialState.form;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createEmployee.pending, (state) => {
				state.validateErrors = undefined;
				state.isLoading = true;
			})
			.addCase(
				createEmployee.fulfilled,
				(state, action: PayloadAction<Employee>) => {
					state.isLoading = false;
					state.data = action.payload;
					state.form = action.payload;
					state.readonly = true;
					state.validateErrors = undefined;
				}
			)
			.addCase(createEmployee.rejected, (state, action) => {
				state.isLoading = false;
				state.validateErrors = action.payload as ValidateEmployeeError[];
			});
	},
});

export const {
	actions: employeeDetailsActions,
	reducer: employeeDetailsReducer,
} = employeeDetailsSlice;
