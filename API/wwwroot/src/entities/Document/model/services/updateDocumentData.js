import { createAsyncThunk } from "@reduxjs/toolkit";
import { TOKEN_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
import { ValidateDocumentError } from "../consts/validateDocumentError";
import { validateDocumentData } from "./validateDocumentData";
import { getDocumentForm } from "../selectors/documentDetails";
export const updateDocumentData = createAsyncThunk("documentDetails/updateDocumentData", async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const formData = getDocumentForm(getState());
    const errors = validateDocumentData(formData);
    if (errors.length) {
        return rejectWithValue(errors);
    }
    const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
    if (!token) {
        return rejectWithValue([ValidateDocumentError.NO_DATA]);
    }
    try {
        const decodedToken = JSON.parse(token);
        if (!decodedToken) {
            return rejectWithValue([ValidateDocumentError.NO_DATA]);
        }
        const response = await extra.api.put(`/documents/${formData?.id}`, formData, {
            headers: {
                Authorization: `Bearer ${decodedToken}`,
            },
        });
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    }
    catch (error) {
        console.error("Failed to fetch document data!", error);
        return rejectWithValue([ValidateDocumentError.SERVER_ERROR]);
    }
});
