import { ThunkConfig } from "@/app/providers/StoreProvider";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SortOrder } from "@/shared/types/sort";
import { getPayrollPageInitited } from "../../selectors/getPayrollsPageSelectors";
import { payrollsPageActions } from "../../slices/payrollPageSlice";
import { PayrollSortField } from "../../consts/payroll_consts";
import { fetchPayrollsList } from "../fetchPayrollList/fetchPayrollList";

export const initPayrollPage = createAsyncThunk<
	void,
	URLSearchParams,
	ThunkConfig<string>
>("documents/initDocumentPage", async (searchParams, thunkApi) => {
	const { getState, dispatch } = thunkApi;
	const inited = getPayrollPageInitited(getState());

	if (!inited) {
		const orderFromUrl = searchParams.get("order") as SortOrder;
		const sortFromUrl = searchParams.get("sort") as PayrollSortField;
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
