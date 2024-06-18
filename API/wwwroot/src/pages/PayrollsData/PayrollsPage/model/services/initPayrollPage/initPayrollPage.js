import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPayrollPageInitited } from "../../selectors/getPayrollsPageSelectors";
import { payrollsPageActions } from "../../slices/payrollPageSlice";
import { fetchPayrollsList } from "../fetchPayrollList/fetchPayrollList";
export const initPayrollPage = createAsyncThunk("documents/initDocumentPage", async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getPayrollPageInitited(getState());
    if (!inited) {
        const orderFromUrl = searchParams.get("order");
        const sortFromUrl = searchParams.get("sort");
        const searchFromUrl = searchParams.get("search");
        if (orderFromUrl) {
            dispatch(payrollsPageActions.setOrder(orderFromUrl));
        }
        if (sortFromUrl) {
            dispatch(payrollsPageActions.setSort(sortFromUrl));
        }
        if (searchFromUrl) {
            dispatch(payrollsPageActions.setSearch(searchFromUrl));
        }
        dispatch(payrollsPageActions.initState());
        dispatch(fetchPayrollsList({}));
    }
});
