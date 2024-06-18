export const getBusinessTripDetailsData = (state) => state.businessTripDetails?.data;
export const getBusinessTripDetailsIsLoading = (state) => state.businessTripDetails?.isLoading || false;
export const getBusinessTripDetailsError = (state) => state.businessTripDetails?.error;
export const getBusinessTripValidateErrors = (state) => state.businessTripDetails?.validateErrors;
export const getBusinessTripForm = (state) => state.businessTripDetails?.form;
export const getBusinessTripReadonly = (state) => state.businessTripDetails?.readonly;
