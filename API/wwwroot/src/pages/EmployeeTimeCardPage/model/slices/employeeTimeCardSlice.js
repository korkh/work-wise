import { createSlice } from "@reduxjs/toolkit";
import { fetchEmployeeTimeCardData } from "../services/fetchEmployeeTimeCardData/fetchEmployeeTimeCardData";
import { saveEmployeeTimeCardData } from "../services/saveEmployeeTimeCardData/saveEmployeeTimeCardData";
const initialState = {
    data: [],
    form: [],
    selectedMonth: "",
    readonly: false,
    isLoading: false,
    error: undefined,
};
const calculateAvailableWorkingHours = (year, month, holidays) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let availableDays = 0;
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const isWeekend = date.getDay() === 0 || date.getDay() === 6;
        const isHoliday = holidays?.includes(day);
        if (!isWeekend && !isHoliday) {
            availableDays++;
        }
    }
    return availableDays * 8;
};
const employeeTimeCardSlice = createSlice({
    name: "employeesTimeCard",
    initialState,
    reducers: {
        setSelectedMonth(state, action) {
            state.selectedMonth = action.payload;
            state.form =
                state.data?.filter((emp) => emp.month === action.payload) || [];
        },
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        updateEmployeeState(state, action) {
            const { id, day, state: workingState } = action.payload;
            const employee = state.form?.find((emp) => emp.id === id);
            if (employee) {
                const workingStateIndex = employee.workingStates.findIndex((ws) => ws.day === day);
                if (workingStateIndex !== -1) {
                    employee.workingStates[workingStateIndex].state = workingState;
                }
                else {
                    employee.workingStates.push({
                        day,
                        state: workingState,
                        id: String(Date.now()),
                    });
                }
            }
        },
        updateAvailableWorkingDays(state, action) {
            const holidays = action.payload;
            const [year, month] = state.selectedMonth.split("-").map(Number);
            state.form?.forEach((employee) => {
                employee.availableWorkingHoursPerMonth = calculateAvailableWorkingHours(year, month - 1, holidays);
                employee.workingStates.forEach((ws) => {
                    if (holidays?.includes(ws.day)) {
                        ws.holiday = true;
                    }
                    else {
                        ws.holiday = false;
                    }
                });
            });
        },
        adjustWorkingHoursPerDay(state, action) {
            const adjustment = action.payload;
            const [year, month] = state.selectedMonth.split("-").map(Number);
            const holidays = [];
            const workingHours = calculateAvailableWorkingHours(year, month - 1, holidays) + adjustment;
            state.form?.forEach((employee) => {
                employee.availableWorkingHoursPerMonth = Math.max(0, workingHours);
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployeeTimeCardData.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        })
            .addCase(fetchEmployeeTimeCardData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.form = action.payload.filter((emp) => emp.month === state.selectedMonth);
        })
            .addCase(fetchEmployeeTimeCardData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
            .addCase(saveEmployeeTimeCardData.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        })
            .addCase(saveEmployeeTimeCardData.fulfilled, (state, action) => {
            state.data = action.payload;
            state.form = action.payload.filter((emp) => emp.month === state.selectedMonth);
            state.isLoading = false;
        })
            .addCase(saveEmployeeTimeCardData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
export const { actions: employeeTimeCardActions, reducer: employeeTimeCardReducer, } = employeeTimeCardSlice;
