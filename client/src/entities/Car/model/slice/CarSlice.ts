import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car, CarSchema } from "../types/Car";

const initialState: CarSchema = {
  
};

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase()      
  },
});

// Action creators are generated for each case reducer function
export const { actions: carActions } = carSlice;
export const { reducer: carReducer } = carSlice;