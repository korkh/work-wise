import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Employee } from "@/entities/Employee";
import { addQueryParams } from "@/shared/lib/utils/url/addQueryParams/addQueryParams";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	getEmployeesPageSize,
	getEmployeesPageSort,
	getEmployeesPageOrder,
	getEmployeesPageSearch,
} from "../../selectors/getEmployeesPageSelectors";

interface FetchEmployeesListProps {
	replace?: boolean;
}

export const fetchEmployeesList = createAsyncThunk<
	Employee[],
	FetchEmployeesListProps,
	ThunkConfig<string>
>("employeesPage/fetchEmployeesLost", async (_, thunkApi) => {
	const { extra, rejectWithValue, getState } = thunkApi;

	const pageSize = getEmployeesPageSize(getState());
	const sort = getEmployeesPageSort(getState());
	const order = getEmployeesPageOrder(getState());
	const search = getEmployeesPageSearch(getState());

	try {
		addQueryParams({
			sort,
			order,
			search,
		});
		const response = await extra.api.get<Employee[]>("/employees", {
			params: {
				_expand: "user",
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
	} catch (e) {
		return rejectWithValue("error");
	}
});
