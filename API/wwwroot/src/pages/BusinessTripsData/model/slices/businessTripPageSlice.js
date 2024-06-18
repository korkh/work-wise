import { BusinessTripSortField } from "@/entities/BusinessTrip";
import { createEntityAdapter, createSlice, } from "@reduxjs/toolkit";
import { fetchBusinessTripsList } from "../services/fetchBusinessTripsList";
const adapterOptions = {
    selectId: (bTrip) => bTrip.id,
};
export const bTripAdapter = createEntityAdapter(adapterOptions);
const initialState = {
    ...bTripAdapter.getInitialState(),
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    order: "asc",
    sort: BusinessTripSortField.laikotarpis,
    search: "",
    _inited: false,
};
export const selectBusinessTripPageState = (state) => state.businessTripPage || initialState;
export const { selectAll: selectAllBusinessTrips, selectById: selectBusinessTripById, } = bTripAdapter.getSelectors(selectBusinessTripPageState);
const businessTripPageSlice = createSlice({
    name: "pages/businessTripPageSlice",
    initialState,
    reducers: {
        // setPage: (state, action: PayloadAction<number>) => {
        // 	state.pageNumber = action.payload;
        // },
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
            // state.hasMore = action.payload.length >= state.pageSize;
            const bTrips = action.payload.filter((item) => item.employeeId);
            if (action.meta.arg.replace) {
                bTripAdapter.setAll(state, bTrips);
            }
            else {
                bTripAdapter.addMany(state, bTrips);
            }
        })
            .addCase(fetchBusinessTripsList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
export const { reducer: businessTripPageReducer, actions: businessTripPageActions, } = businessTripPageSlice;
