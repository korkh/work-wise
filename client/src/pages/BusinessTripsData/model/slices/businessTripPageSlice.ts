import { BusinessTrip, BusinessTripSortField } from "@/entities/BusinessTrip";
import {
	PayloadAction,
	createEntityAdapter,
	createSlice,
} from "@reduxjs/toolkit";
import { EntityAdapterOptions } from "@reduxjs/toolkit/dist/entities/models";
import { BusinessTripPageSchema } from "../types/businessTripPageSchema";
import { StateSchema } from "@/app/providers/StoreProvider";
import { SortOrder } from "@/shared/types/sort";
import { fetchBusinessTripsList } from "../services/fetchBusinessTripsList";

const adapterOptions: EntityAdapterOptions<BusinessTrip, string> = {
	selectId: (bTrip: BusinessTrip) => bTrip.id,
};

export const bTripAdapter = createEntityAdapter<BusinessTrip>(adapterOptions);

const initialState: BusinessTripPageSchema = {
	...bTripAdapter.getInitialState(),
	isLoading: false,
	error: undefined,
	ids: [],
	entities: {},
	pageNumber: 1,
	pageSize: 10,
	hasMore: true,
	order: "asc",
	sort: BusinessTripSortField.laikotarpis,
	search: "",
	_inited: false,
};

export const selectBusinessTripPageState = (state: StateSchema) =>
	state.businessTripPage || initialState;

export const {
	selectAll: selectAllBusinessTrips,
	selectById: selectBusinessTripById,
} = bTripAdapter.getSelectors(selectBusinessTripPageState);

const businessTripPageSlice = createSlice({
	name: "pages/businessTripPageSlice",
	initialState,
	reducers: {
		setPage: (state, action: PayloadAction<number>) => {
			state.pageNumber = action.payload;
		},
		setOrder: (state, action: PayloadAction<SortOrder>) => {
			state.order = action.payload;
		},
		setSort: (state, action: PayloadAction<BusinessTripSortField>) => {
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
			.addCase(fetchBusinessTripsList.pending, (state, action) => {
				state.error = undefined;
				state.isLoading = true;
				if (action.meta.arg.replace) {
					bTripAdapter.removeAll(state);
				}
			})
			.addCase(fetchBusinessTripsList.fulfilled, (state, action) => {
				state.isLoading = false;
				state.hasMore = action.payload.length >= state.pageSize;
				const bTrips = action.payload.filter(
					(item: BusinessTrip) => item.employeeId
				);
				if (action.meta.arg.replace) {
					bTripAdapter.setAll(state, bTrips);
				} else {
					bTripAdapter.addMany(state, bTrips);
				}
			})
			.addCase(fetchBusinessTripsList.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const {
	reducer: businessTripPageReducer,
	actions: businessTripPageActions,
} = businessTripPageSlice;
