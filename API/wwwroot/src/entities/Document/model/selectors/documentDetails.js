export const getDocumentDetailsData = (state) => state.documentDetails?.data;
export const getDocumentDetailsIsLoading = (state) => state.documentDetails?.isLoading || false;
export const getDocumentDetailsError = (state) => state.documentDetails?.error;
export const getDocumentValidateErrors = (state) => state.documentDetails?.validateErrors;
export const getDocumentForm = (state) => state.documentDetails?.form;
export const getDocumentReadonly = (state) => state.documentDetails?.readonly;
