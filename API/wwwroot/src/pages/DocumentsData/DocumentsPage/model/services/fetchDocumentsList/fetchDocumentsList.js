import { TOKEN_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDocumentsPageOrder, getDocumentsPagePageNumber, getDocumentsPageSearch, getDocumentsPageSize, getDocumentsPageSort, } from "../../selectors/getDocumentsPageSelectors";
import { addQueryParams } from "@/shared/lib/utils/url/addQueryParams/addQueryParams";
export const fetchDocumentsList = createAsyncThunk("employeesPage/fetchDocumenstList", async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
    const pageSize = getDocumentsPageSize(getState());
    const sort = getDocumentsPageSort(getState());
    const order = getDocumentsPageOrder(getState());
    const pageNumber = getDocumentsPagePageNumber(getState());
    const search = getDocumentsPageSearch(getState());
    try {
        if (!token) {
            throw new Error("No token found");
        }
        addQueryParams({
            sort,
            order,
            search,
        });
        const response = await extra.api.get("/documents", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                _expand: "user",
                _pageNumber: pageNumber,
                _pageSize: pageSize,
                _sort: sort,
                _order: order,
                q: search,
            },
        });
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    }
    catch (e) {
        return rejectWithValue("No response from server");
    }
});
