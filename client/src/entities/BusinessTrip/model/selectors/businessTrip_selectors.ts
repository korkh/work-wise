import { StateSchema } from "@/app/providers/StoreProvider";

export const getBusinessTripDetailsData = (state: StateSchema) =>
	state.businessTripDetails?.data;
export const getBusinessTripDetailsIsLoading = (state: StateSchema) =>
	state.businessTripDetails?.isLoading || false;
export const getBusinessTripDetailsError = (state: StateSchema) =>
	state.businessTripDetails?.error;
export const getBusinessTripValidateErrors = (state: StateSchema) =>
	state.businessTripDetails?.validateErrors;

export const getBusinessTripForm = (state: StateSchema) =>
	state.businessTripDetails?.form;

export const getBusinessTripReadonly = (state: StateSchema) =>
	state.businessTripDetails?.readonly;
