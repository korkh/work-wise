import { createAsyncThunk } from "@reduxjs/toolkit";
import { getEmployeesPageInitited } from "../../selectors/getEmployeesPageSelectors";
import { employeesPageActions } from "../../slices/employeesPageSlice";
import { fetchEmployeesList } from "../fetchEmployeesList/fetchEmployeesList";
export const initEmployeesPage = createAsyncThunk("employeesPage/initEmployeesPage", async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getEmployeesPageInitited(getState());
    if (!inited) {
        const orderFromUrl = searchParams.get("order");
        const sortFromUrl = searchParams.get("sort");
        const searchFromUrl = searchParams.get("search");
        if (orderFromUrl) {
            dispatch(employeesPageActions.setOrder(orderFromUrl));
        }
        if (sortFromUrl) {
            dispatch(employeesPageActions.setSort(sortFromUrl));
        }
        if (searchFromUrl) {
            dispatch(employeesPageActions.setSearch(searchFromUrl));
        }
        dispatch(employeesPageActions.initState());
        dispatch(fetchEmployeesList({}));
    }
});
