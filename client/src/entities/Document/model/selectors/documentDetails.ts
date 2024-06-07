import { StateSchema } from "@/app/providers/StoreProvider";

export const getDocumentDetailsData = (state: StateSchema) =>
	state.documentDetails?.data;
export const getDocumentDetailsIsLoading = (state: StateSchema) =>
	state.documentDetails?.isLoading || false;
export const getDocumentDetailsError = (state: StateSchema) =>
	state.documentDetails?.error;
export const getDocumentValidateErrors = (state: StateSchema) =>
	state.documentDetails?.validateErrors;

export const getDocumentForm = (state: StateSchema) =>
	state.documentDetails?.form;

export const getDocumentReadonly = (state: StateSchema) =>
	state.documentDetails?.readonly;
