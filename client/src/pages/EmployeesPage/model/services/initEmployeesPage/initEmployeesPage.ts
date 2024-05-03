import { ThunkConfig } from "@/app/providers/StoreProvider";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getEmployeesPageInitited } from "../../selectors/getEmployeesPageSelectors";
import { employeesPageActions } from "../../slices/employeesPageSlice";
import { SortOrder } from "@/shared/types/sort";
import { EmployeeSortField } from "@/entities/Employee";
import { fetchEmployeesList } from "../fetchEmployeesList/fetchEmployeesList";

export const initEmployeesPage = createAsyncThunk<
	void,
	URLSearchParams,
	ThunkConfig<string>
>("employeesPage/initEmployeesPage", async (searchParams, thunkApi) => {
	const { getState, dispatch } = thunkApi;
	const inited = getEmployeesPageInitited(getState());

	if (!inited) {
		const orderFromUrl = searchParams.get("order") as SortOrder;
		const sortFromUrl = searchParams.get("sort") as EmployeeSortField;
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
