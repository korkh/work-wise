export type { DocumentSchema } from "./model/types/DocumentSchema";
export { ValidateDocumentError } from "./model/consts/validateDocumentError";

export { DocumentSortField } from "./model/consts/document_consts";

export type { EmployeeDocument } from "./model/types/EmployeeDocument";

export {
	getDocumentDetailsData,
	getDocumentDetailsError,
	getDocumentDetailsIsLoading,
	getDocumentForm,
	getDocumentReadonly,
	getDocumentValidateErrors,
} from "./model/selectors/documentDetails";
