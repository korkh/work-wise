import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Employee } from "@/entities/Employee";
import { addQueryParams } from "@/shared/lib/utils/url/addQueryParams/addQueryParams";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	getEmployeesPageSize,
	getEmployeesPageSort,
	getEmployeesPageOrder,
	getEmployeesPageSearch,
	getEmployeesPagePageNumber,
} from "../../selectors/getEmployeesPageSelectors";
import { TOKEN_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";

interface FetchEmployeesListProps {
	replace?: boolean;
}

export const fetchEmployeesList = createAsyncThunk<
	Employee[],
	FetchEmployeesListProps,
	ThunkConfig<string>
>("employeesPage/fetchEmployeesLost", async (_, thunkApi) => {
	const { extra, rejectWithValue, getState } = thunkApi;
	const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
	const pageSize = getEmployeesPageSize(getState());
	const sort = getEmployeesPageSort(getState());
	const order = getEmployeesPageOrder(getState());
	const pageNumber = getEmployeesPagePageNumber(getState());
	const search = getEmployeesPageSearch(getState());

	try {
		if (!token) {
			throw new Error("No token found");
		}

		addQueryParams({
			sort,
			order,
			search,
		});

		const response = await extra.api.get<Employee[]>("/employees", {
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
	} catch (e) {
		return rejectWithValue("No response from server");
	}
});
