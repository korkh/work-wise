import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBusinessTripById } from "../services/fetchBusinessTripById";
import { updateBusinessTripData } from "../services/updateBusinessTripData";
import { BusinessTripDetailsSchema } from "../types/BusinessTripSchema";
import { BusinessTrip } from "../types/BusinessTrip";

const initialState: BusinessTripDetailsSchema = {
	isLoading: false,
	readonly: true,
	error: undefined,
	data: undefined,
};

export const businessTripSlice = createSlice({
	name: "businessTripDetails",
	initialState,
	reducers: {
		setReadonly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload;
		},
		cancelEdit: (state) => {
			state.readonly = true;
			state.validateErrors = undefined;
			state.form = state.data;
		},
		updateBusinessTrip: (state, action: PayloadAction<BusinessTrip>) => {
			state.form = {
				...state.form,
				...action.payload,
			};
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchBusinessTripById.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(
				fetchBusinessTripById.fulfilled,
				(state, action: PayloadAction<BusinessTrip>) => {
					state.isLoading = false;
					state.data = action.payload;
					state.form = action.payload;
				}
			)
			.addCase(fetchBusinessTripById.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(updateBusinessTripData.pending, (state) => {
				state.validateErrors = undefined;
				state.isLoading = true;
			})
			.addCase(
				updateBusinessTripData.fulfilled,
				(state, action: PayloadAction<BusinessTrip>) => {
					state.isLoading = false;
					state.data = action.payload;
					state.form = action.payload;
					state.readonly = true;
					state.validateErrors = undefined;
				}
			)
			.addCase(updateBusinessTripData.rejected, (state, action) => {
				state.isLoading = false;
				state.validateErrors = action.payload;
			});
	},
});

// Action creators are generated for each case reducer function
export const { actions: businessTripActions } = businessTripSlice;
export const { reducer: businessTripReducer } = businessTripSlice;
