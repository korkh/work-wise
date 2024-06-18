import { TOKEN_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addQueryParams } from "@/shared/lib/utils/url/addQueryParams/addQueryParams";
import { getPayrollPageSize, getPayrollPageSort, getPayrollPageOrder, getPayrollPagePageNumber, getPayrollPageSearch, } from "../../selectors/getPayrollsPageSelectors";
export const fetchPayrollsList = createAsyncThunk("payrollsPage/fetchPayrollstList", async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
    const pageSize = getPayrollPageSize(getState());
    const sort = getPayrollPageSort(getState());
    const order = getPayrollPageOrder(getState());
    const pageNumber = getPayrollPagePageNumber(getState());
    const search = getPayrollPageSearch(getState());
    try {
        if (!token) {
            throw new Error("No token found");
        }
        addQueryParams({
            sort,
            order,
            search,
        });
        const response = await extra.api.get("/payrolls", {
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
