import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
	EmployeeTimeCard,
	EmployeeTimeCardSchema,
} from "../types/EmployeeTimeCard";

const initialState: EmployeeTimeCardSchema = {
	data: [],
	selectedMonth: "",
	readonly: false,
	isLoading: false,
	error: undefined,
};

const calculateAvailableWorkingDays = (
	year: number,
	month: number,
	holidays: number[]
): number => {
	const daysInMonth = new Date(year, month + 1, 0).getDate();
	let availableDays = 0;

	for (let day = 1; day <= daysInMonth; day++) {
		const date = new Date(year, month, day);
		const isWeekend = date.getDay() === 0 || date.getDay() === 6;
		const isHoliday = holidays.includes(day);
		if (!isWeekend && !isHoliday) {
			availableDays++;
		}
	}

	return availableDays;
};

const employeeTimeCardSlice = createSlice({
	name: "employeesTimeCard",
	initialState,
	reducers: {
		setSelectedMonth(state, action: PayloadAction<string>) {
			state.selectedMonth = action.payload;
		},
		setEmployeeData(state, action: PayloadAction<EmployeeTimeCard[]>) {
			state.data = action.payload;
		},
		setLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		},
		setError(state, action: PayloadAction<string | undefined>) {
			state.error = action.payload;
		},
		updateEmployeeState(
			state,
			action: PayloadAction<{ id: number; day: number; state: string | number }>
		) {
			const { id, day, state: workingState } = action.payload;
			const employee = state.data?.find((emp) => emp.id === id);
			if (employee) {
				if (!employee.workingState) {
					employee.workingState = {};
				}
				employee.workingState[day] = workingState;
				console.log(
					`Updated state for employee ${id} on day ${day} to ${workingState}`
				);
			}
		},
		updateAvailableWorkingDays(state, action: PayloadAction<number[]>) {
			const holidays = action.payload;
			const [year, month] = state.selectedMonth.split("-").map(Number);
			state.data?.forEach((employee) => {
				employee.availableWorkingDaysPerMonth = calculateAvailableWorkingDays(
					year,
					month - 1,
					holidays
				);
			});
		},
	},
});

export const {
	actions: employeeTimeCardActions,
	reducer: employeeTimeCardReducer,
} = employeeTimeCardSlice;
