import { createSlice } from "@reduxjs/toolkit";
import { fetchDocumentByID } from "../services/fetchDocumentById";
import { updateDocumentData } from "../services/updateDocumentData";
const initialState = {
    isLoading: false,
    readonly: true,
    error: undefined,
    data: undefined,
};
export const documentDetailsSlice = createSlice({
    name: "documentDetails",
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
        updateDocument: (state, action) => {
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
            .addCase(fetchDocumentByID.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(fetchDocumentByID.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.form = action.payload;
        })
            .addCase(fetchDocumentByID.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
            .addCase(updateDocumentData.pending, (state) => {
            state.validateErrors = undefined;
            state.isLoading = true;
        })
            .addCase(updateDocumentData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.form = action.payload;
            state.readonly = true;
            state.validateErrors = undefined;
        })
            .addCase(updateDocumentData.rejected, (state, action) => {
            state.isLoading = false;
            state.validateErrors = action.payload;
        });
    },
});
export const { actions: documentDetailsActions } = documentDetailsSlice;
export const { reducer: documentDetailsReducer } = documentDetailsSlice;
