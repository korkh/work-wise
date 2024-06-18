import { EmployeeSortField } from "@/entities/Employee";
import { createEntityAdapter, createSlice, } from "@reduxjs/toolkit";
import { fetchEmployeesList } from "../services/fetchEmployeesList/fetchEmployeesList";
const adapterOptions = {
    selectId: (employee) => employee.id,
};
const employeesAdapter = createEntityAdapter(adapterOptions);
export const { selectAll: selectAllEmployees } = employeesAdapter.getSelectors((state) => state.employeePage || initialState);
const initialState = {
    ...employeesAdapter.getInitialState(),
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    pageNumber: 1,
    pageSize: 8,
    hasMore: true,
    order: "asc",
    sort: EmployeeSortField.LASTNAME,
    search: "",
    _inited: false,
};
const employeesPageSlice = createSlice({
    name: "pages/employeesPageSlice",
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
            state.pageSize = 10;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployeesList.pending, (state, action) => {
            state.error = undefined;
            state.isLoading = true;
            if (action.meta.arg.replace) {
                employeesAdapter.removeAll(state);
            }
        })
            .addCase(fetchEmployeesList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.hasMore = action.payload.length >= state.pageSize;
            const employees = action.payload.filter((item) => item.id);
            if (action.meta.arg.replace) {
                employeesAdapter.setAll(state, employees);
            }
            else {
                employeesAdapter.addMany(state, employees);
            }
        })
            .addCase(fetchEmployeesList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
export const { reducer: employeesPageReducer, actions: employeesPageActions } = employeesPageSlice;
