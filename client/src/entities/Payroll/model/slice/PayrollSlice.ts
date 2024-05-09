import { createSlice } from "@reduxjs/toolkit";
import { PayrollSchema } from "../types/Payroll";

const initialState: PayrollSchema = {
  
};

export const payrollSlice = createSlice({
  name: "payroll",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase();      
  },
});

// Action creators are generated for each case reducer function
export const { actions: payrollActions } = payrollSlice;
export const { reducer: payrollReducer } = payrollSlice;