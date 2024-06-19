import { createSlice } from "@reduxjs/toolkit";
import { fetchEmployeeByID } from "../services/fetchEmployeeById/fetchEmployeeById";
import { updateEmployeeData } from "../services/updateEmployeeData/updateEmployeeData";
import { deleteEmployeeById } from "../services/deleteEmployeeById/deleteEmployeeById";
const initialState = {
    isLoading: false,
    readonly: true,
    error: undefined,
    data: undefined,
};
export const employeeDetailsSlice = createSlice({
    name: "employeeDetails",
    initialState,
    reducers: {
        setReadonly: (state, action) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.validateErrors = undefined;
            state.form = state.data;
        },
        updateEmployee: (state, action) => {
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
            .addCase(fetchEmployeeByID.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.form = action.payload;
        })
            .addCase(fetchEmployeeByID.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
            .addCase(updateEmployeeData.pending, (state) => {
            state.validateErrors = undefined;
            state.isLoading = true;
        })
            .addCase(updateEmployeeData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.form = action.payload;
            state.readonly = true;
            state.validateErrors = undefined;
        })
            .addCase(updateEmployeeData.rejected, (state, action) => {
            state.isLoading = false;
            state.validateErrors = action.payload;
        })
            .addCase(deleteEmployeeById.fulfilled, (state) => {
            state.isLoading = false;
            state.data = undefined;
            state.form = undefined;
        })
            .addCase(deleteEmployeeById.rejected, (state, action) => {
            state.isLoading = false;
            state.validateErrors = action.payload;
        })
            .addCase(deleteEmployeeById.pending, (state) => {
            state.validateErrors = undefined;
            state.isLoading = true;
        });
    },
});
export const { actions: employeeDetailsActions, reducer: employeeDetailsReducer, } = employeeDetailsSlice;
