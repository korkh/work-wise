import { ThunkConfig } from "@/app/providers/StoreProvider";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	getEmployeesPageHasMore,
	getEmployeesPageIsLoading,
	getEmployeesPagePageNumber,
} from "../../selectors/getEmployeesPageSelectors";
import { employeesPageActions } from "../../slices/employeesPageSlice";
import { fetchEmployeesList } from "../fetchEmployeesList/fetchEmployeesList";

export const fetchNextEmployeesPage = createAsyncThunk<
	void,
	void,
	ThunkConfig<string>
>("employeesPage/fetchNextemployeesPage", async (_, thunkApi) => {
	const { getState, dispatch } = thunkApi;
	const hasMore = getEmployeesPageHasMore(getState());
	const page = getEmployeesPagePageNumber(getState());
	const isLoading = getEmployeesPageIsLoading(getState());

	if (hasMore && !isLoading) {
		dispatch(employeesPageActions.setPage(page + 1));
		dispatch(fetchEmployeesList({}));
	}
});
