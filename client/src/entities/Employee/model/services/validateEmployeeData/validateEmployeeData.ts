import { ValidateEmployeeError } from "../../consts/validateEmployeeError";
import { Employee } from "../../types/Employee";

export const validateEmployeeData = (
	employee?: Employee
): ValidateEmployeeError[] => {
	if (!employee) {
		return [ValidateEmployeeError.NO_DATA];
	}

	const {
		firstName,
		lastName,
		birthDay,
		registrationAddress,
		phoneNumber,
		email,
		transportInfo,
		contractData,
		documents,
		payrolls,
	} = employee;

	const errors: ValidateEmployeeError[] = [];

	if (!firstName?.trim() || !lastName?.trim()) {
		errors.push(ValidateEmployeeError.INCORRECT_EMPLOYEE_DATA);
	}

	if (!email?.match(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/)) {
		errors.push(ValidateEmployeeError.INCORRECT_EMAIL);
	}

	if (!phoneNumber?.match(/^\+?[1-9]\d{1,14}$/)) {
		errors.push(ValidateEmployeeError.INCORRECT_PHONE_NUMBER);
	}

	if (
		!registrationAddress ||
		!registrationAddress.address1.trim() ||
		!registrationAddress.city.trim()
	) {
		errors.push(ValidateEmployeeError.INCORRECT_REGISTRATION_ADDRESS);
	}

	// Validate birth date - assuming we expect the employee to be at least 18 years old
	const eighteenYearsAgo = new Date();
	eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
	if (birthDay! >= eighteenYearsAgo) {
		errors.push(ValidateEmployeeError.INCORRECT_BIRTHDATE);
	}

	if (
		contractData &&
		contractData.acceptionDate >= contractData.dismissalDate
	) {
		errors.push(ValidateEmployeeError.INCORRECT_CONTRACT_DATA);
	}

	if (!documents?.length) {
		errors.push(ValidateEmployeeError.INCORRECT_DOCUMENTS_DATA);
	}

	documents?.forEach((document) => {
		if (document.expirationDate && document.expirationDate < new Date()) {
			errors.push(ValidateEmployeeError.INCORRECT_DOCUMENTS_DATA);
		}
	});

	if (transportInfo && !transportInfo.drivingLicenseNumber.trim()) {
		errors.push(ValidateEmployeeError.INCORRECT_TRANSPORT_INFO);
	}

	if (!payrolls?.length) {
		errors.push(ValidateEmployeeError.INCORRECT_PAYROLLS_DATA);
	}

	return errors;
};
