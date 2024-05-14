import { StateSchema } from "@/app/providers/StoreProvider";
import {
	PayloadAction,
	createEntityAdapter,
	createSlice,
} from "@reduxjs/toolkit";
import { EntityAdapterOptions } from "@reduxjs/toolkit/dist/entities/models";
import { SortOrder } from "@/shared/types/sort";
import { Payroll } from "@/entities/Payroll";
import { PayrollPageSchema } from "../types/payrollSchema";
import { PayrollSortField } from "../consts/payroll_consts";
import { fetchPayrollsList } from "../services/fetchPayrollList/fetchPayrollList";

const adapterOptions: EntityAdapterOptions<Payroll, string> = {
	selectId: (doc: Payroll) => doc.id,
};

export const payrollsAdapter = createEntityAdapter<Payroll>(adapterOptions);

export const { selectAll: selectAllPayrolls } =
	payrollsAdapter.getSelectors<StateSchema>(
		(state) => state.payrollPage || initialState
	);

const initialState: PayrollPageSchema = {
	...payrollsAdapter.getInitialState(),
	isLoading: false,
	error: undefined,
	ids: [],
	entities: {},
	pageNumber: 1,
	pageSize: 10,
	hasMore: true,
	order: "asc",
	sort: PayrollSortField.ID,
	search: "",
	_inited: false,
};

const payrollsPageSlice = createSlice({
	name: "pages/payrollPageSlice",
	initialState,
	reducers: {
		setPage: (state, action: PayloadAction<number>) => {
			state.pageNumber = action.payload;
		},
		setOrder: (state, action: PayloadAction<SortOrder>) => {
			state.order = action.payload;
		},
		setSort: (state, action: PayloadAction<PayrollSortField>) => {
			state.sort = action.payload;
		},
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},
		initState: (state) => {
			state.pageSize = 8;
			state._inited = true;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPayrollsList.pending, (state, action) => {
				state.error = undefined;
				state.isLoading = true;
				if (action.meta.arg.replace) {
					payrollsAdapter.removeAll(state);
				}
			})
			.addCase(fetchPayrollsList.fulfilled, (state, action) => {
				state.isLoading = false;
				state.hasMore = action.payload.length >= state.pageSize;
				const payrolls = action.payload.filter((item: Payroll) => item.id);
				if (action.meta.arg.replace) {
					payrollsAdapter.setAll(state, payrolls);
				} else {
					payrollsAdapter.addMany(state, payrolls);
				}
			})
			.addCase(fetchPayrollsList.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { reducer: payrollsPageReducer, actions: payrollsPageActions } =
	payrollsPageSlice;
