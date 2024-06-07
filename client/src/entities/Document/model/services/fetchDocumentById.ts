import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "@/app/providers/StoreProvider";
import { TOKEN_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
import { EmployeeDocument } from "../types/EmployeeDocument";

export const fetchDocumentByID = createAsyncThunk<
	EmployeeDocument,
	string | undefined,
	ThunkConfig<string>
>("documentDetails/fetchDocumentById", async (documentId, thunkApi) => {
	const { extra, rejectWithValue } = thunkApi;

	const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
	if (!token) {
		return rejectWithValue("User not found");
	}

	try {
		if (!documentId) {
			throw new Error();
		}

		const decodedToken = JSON.parse(token);
		if (!decodedToken) {
			return rejectWithValue("Invalid token data");
		}

		const document = await extra.api.get<EmployeeDocument>(
			`/documents/${documentId}`,
			{
				headers: {
					Authorization: `Bearer ${decodedToken}`,
				},
			}
		);

		if (!document.data) {
			throw new Error();
		}
		console.log("RESPONSE IN fetchDocumentByID", document.data);
		return document.data;
	} catch (error) {
		console.error("Failed to fetch document data!", error);
		return rejectWithValue("Failed to fetch document data");
	}
});
