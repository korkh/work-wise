import { StateSchema } from "@/app/providers/StoreProvider";
import { Employee, EmployeeSortField } from "@/entities/Employee";
import {
	PayloadAction,
	createEntityAdapter,
	createSlice,
} from "@reduxjs/toolkit";
import { EntityAdapterOptions } from "@reduxjs/toolkit/dist/entities/models";
import { EmployeePageSchema } from "../types/eployeesPageSchema";
import { SortOrder } from "@/shared/types/sort";
import { EmployeeView } from "../../../../entities/Employee/model/consts/employee_consts";
import { EMPLOYEE_VIEW_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
import { fetchEmployeesList } from "../services/fetchEmployeesList/fetchEmployeesList";

const adapterOptions: EntityAdapterOptions<Employee, string> = {
	selectId: (employee: Employee) => employee.id,
};

const employeesAdapter = createEntityAdapter<Employee>(adapterOptions);

export const getEmployees = employeesAdapter.getSelectors<StateSchema>(
	(state) => state.employeePage || employeesAdapter.getInitialState()
);

const initialState: EmployeePageSchema = {
	...employeesAdapter.getInitialState(),
	isLoading: false,
	error: undefined,
	ids: [],
	entities: {},
	pageNumber: 1,
	pageSize: 8,
	view: EmployeeView.GRID,
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
		setView: (state, action: PayloadAction<EmployeeView>) => {
			state.view = action.payload;
			localStorage.setItem(EMPLOYEE_VIEW_LOCALSTORAGE_KEY, action.payload);
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.pageNumber = action.payload;
		},
		setOrder: (state, action: PayloadAction<SortOrder>) => {
			state.order = action.payload;
		},
		setSort: (state, action: PayloadAction<EmployeeSortField>) => {
			state.sort = action.payload;
		},
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},
		initState: (state) => {
			const view = localStorage.getItem(
				EMPLOYEE_VIEW_LOCALSTORAGE_KEY
			) as EmployeeView;
			state.pageSize = view === EmployeeView.LIST ? 4 : 8;
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

				if (action.meta.arg.replace) {
					employeesAdapter.setAll(state, action.payload);
				} else {
					employeesAdapter.addMany(state, action.payload);
				}
			})
			.addCase(fetchEmployeesList.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { reducer: employeesPageReducer, actions: employeesPageActions } =
	employeesPageSlice;
