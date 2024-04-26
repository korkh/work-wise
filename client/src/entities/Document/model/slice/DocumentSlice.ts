import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Document, DocumentSchema } from "../types/Document";

const initialState: DocumentSchema = {
  
};

export const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase()      
  },
});

// Action creators are generated for each case reducer function
export const { actions: documentActions } = documentSlice;
export const { reducer: documentReducer } = documentSlice;