import { ValidateDocumentError } from "../consts/validateDocumentError";
import { EmployeeDocument } from "../types/EmployeeDocument";

export const validateDocumentData = (
	document?: EmployeeDocument
): ValidateDocumentError[] => {
	if (!document) {
		return [ValidateDocumentError.NO_DATA];
	}

	const { title, expirationDate, issueDate } = document;

	const errors: ValidateDocumentError[] = [];

	if (!title?.trim()) {
		errors.push(ValidateDocumentError.INCORRECT_DOCUMENT_DATA);
	}

	const nowDate = new Date();

	if (!issueDate || new Date(issueDate) >= nowDate) {
		errors.push(ValidateDocumentError.INCORRECT_DOCUMENT_DATA);
	}

	if (!expirationDate || new Date(expirationDate) <= nowDate) {
		errors.push(ValidateDocumentError.INCORRECT_DOCUMENT_DATA);
	}

	return errors;
};
