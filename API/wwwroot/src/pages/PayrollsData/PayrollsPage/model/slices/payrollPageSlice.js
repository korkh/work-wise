import { createEntityAdapter, createSlice, } from "@reduxjs/toolkit";
import { PayrollSortField } from "../consts/payroll_consts";
import { fetchPayrollsList } from "../services/fetchPayrollList/fetchPayrollList";
const adapterOptions = {
    selectId: (doc) => doc.id,
};
export const payrollsAdapter = createEntityAdapter(adapterOptions);
export const { selectAll: selectAllPayrolls } = payrollsAdapter.getSelectors((state) => state.payrollPage || initialState);
const initialState = {
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
        setPage: (state, action) => {
            state.pageNumber = action.payload;
        },
        setOrder: (state, action) => {
            state.order = action.payload;
        },
        setSort: (state, action) => {
            state.sort = action.payload;
        },
        setSearch: (state, action) => {
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
            const payrolls = action.payload.filter((item) => item.id);
            if (action.meta.arg.replace) {
                payrollsAdapter.setAll(state, payrolls);
            }
            else {
                payrollsAdapter.addMany(state, payrolls);
            }
        })
            .addCase(fetchPayrollsList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
export const { reducer: payrollsPageReducer, actions: payrollsPageActions } = payrollsPageSlice;
