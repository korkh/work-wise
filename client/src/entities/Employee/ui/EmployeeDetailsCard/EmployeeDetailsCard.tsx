import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import {
	getEmployeeDetailsError,
	getEmployeeDetailsIsLoading,
	getEmployeeForm,
	getEmployeeReadonly,
	getEmployeeValidateErrors,
} from "../../model/selectors/employeeDetails";
import { useSelector } from "react-redux";
import { TextHolder } from "@/shared/ui/TextHolder";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ValidateEmployeeError } from "../../model/consts/validateEmployeeError";
import { fetchEmployeeByID } from "../../model/services/fetchEmployeeById/fetchEmployeeById";
import {
	employeeDetailsActions,
	employeeDetailsReducer,
} from "../../model/slices/employeeDetailsSlice";

import { EmployeeDetailsCardHeader } from "../EmployeeDetailsCardHeader/EmployeeDetailsCardHeader";
import { Employee } from "../../model/types/Employee";
import { EmployeeDetailsCardContent } from "../EmployeeDetailsCardContent";
import { ColumnStack } from "@/shared/ui/Stack";
import {
	DynamicReducerLoader,
	ReducersList,
} from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { useInitEffect } from "@/shared/lib/hooks/useInitEffect/useInitEffect";
export interface EmployeeDetailsCardProps {
	className?: string;
	data?: Employee;
	error?: string;
	isLoading?: boolean;
	readonly?: boolean;
	employeeId?: string;
	onChangeFirstname?: (value?: string) => void;
	onChangeLastname?: (value?: string) => void;
	onChangeBirthday?: (
		value?: Date | null,
		event?: React.SyntheticEvent<unknown, Event>
	) => void;
	onChangeEmail?: (value?: string) => void;
	onChangePhoneNumber?: (value?: string) => void;
	onChangeRegistrationAddress?: (value?: string) => void;
	onChangeCity?: (value?: string) => void;
	onChangeZip?: (value?: string) => void;
	onChangeCountry?: (value?: string) => void;
	onChangeDrivingLicenseNumber?: (value?: string) => void;
	onChangeE100CardNumber?: (value?: string) => void;
	onChangeExpectedKmPerDay?: (value?: string) => void;
	onChangePosition?: (value?: string) => void;
	onChangeContractNumber?: (value?: string) => void;
	onChangeAcceptionDate?: (
		value?: Date | null,
		event?: React.SyntheticEvent<unknown, Event>
	) => void;
	onChangeDismissalDate?: (
		value?: Date | null,
		event?: React.SyntheticEvent<unknown, Event>
	) => void;
	onChangeEmployementDays?: (value?: string) => void;
	onChangeeAnnualHolidays?: (value?: string) => void;
	onChangeFatherHolidays?: (value?: string) => void;
	onChangeUnpaidHolidays?: (value?: string) => void;
	onChangeTruancyDays?: (value?: string) => void;
	onChangeAllowedAbsenceDays?: (value?: string) => void;
	onChangeUnusedHolidays?: (value?: string) => void;
	onChangeDocumentTitle?: (index: number, title?: string) => void;
	onChangeDocumentIssueDate?: (
		index: number,
		value?: Date | null,
		event?: React.SyntheticEvent<unknown, Event>
	) => void;
	onChangeDocumentExpirationDate?: (
		index: number,
		value?: Date | null,
		event?: React.SyntheticEvent<unknown, Event>
	) => void;
}

const reducers: ReducersList = {
	employeeDetails: employeeDetailsReducer,
};

export const EmployeeDetailsCard = memo(function EmployeeDetailsCard(
	props: EmployeeDetailsCardProps
) {
	const { className, employeeId } = props;
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const formData = useSelector(getEmployeeForm);
	const isLoading = useSelector(getEmployeeDetailsIsLoading);
	const error = useSelector(getEmployeeDetailsError);
	const readonly = useSelector(getEmployeeReadonly);
	const validateErrors = useSelector(getEmployeeValidateErrors);

	const validateErrorTranslates = {
		[ValidateEmployeeError.INCORRECT_EMPLOYEE_DATA]: t(
			"errors.incorrect_employee_data"
		),
		[ValidateEmployeeError.INCORRECT_BIRTHDATE]: t(
			"errors.incorrect_birthdate"
		),
		[ValidateEmployeeError.INCORRECT_REGISTRATION_ADDRESS]: t(
			"errors.incorrect_registration_address"
		),
		[ValidateEmployeeError.INCORRECT_PHONE_NUMBER]: t(
			"errors.incorrect_phone_number"
		),
		[ValidateEmployeeError.INCORRECT_EMAIL]: t("errors.incorrect_email"),
		[ValidateEmployeeError.INCORRECT_TRANSPORT_INFO]: t(
			"errors.incorrect_transport_info"
		),
		[ValidateEmployeeError.INCORRECT_CONTRACT_DATA]: t(
			"errors.incorrect_contract_data"
		),
		[ValidateEmployeeError.INCORRECT_DOCUMENTS_DATA]: t(
			"errors.incorrect_documents_data"
		),
		[ValidateEmployeeError.INCORRECT_PAYROLLS_DATA]: t(
			"errors.incorrect_payrolls_data"
		),
		[ValidateEmployeeError.NO_DATA]: t("errors.no_data"),
		[ValidateEmployeeError.SERVER_ERROR]: t("errors.server_error"),
	};

	useInitEffect(() => {
		if (employeeId) {
			dispatch(fetchEmployeeByID(employeeId));
		}
	});

	const onChangeFirstname = useCallback(
		(value?: string) => {
			dispatch(
				employeeDetailsActions.updateEmployee({ firstName: value || "" })
			);
		},
		[dispatch]
	);

	const onChangeLastname = useCallback(
		(value?: string) => {
			dispatch(
				employeeDetailsActions.updateEmployee({ lastName: value || "" })
			);
		},
		[dispatch]
	);

	const onChangeBirthDay = (
		date?: Date | null,
		event?: React.SyntheticEvent<unknown, Event>
	) => {
		if (!event) return;
		dispatch(
			employeeDetailsActions.updateEmployee({
				birthDay: date || null,
			})
		);
	};

	const onChangeEmail = useCallback(
		(value?: string) => {
			dispatch(employeeDetailsActions.updateEmployee({ email: value || "" }));
		},
		[dispatch]
	);

	const onChangePhoneNumber = useCallback(
		(value?: string) => {
			dispatch(
				employeeDetailsActions.updateEmployee({ phoneNumber: value || "" })
			);
		},
		[dispatch]
	);

	const onChangeRegistrationAddress = useCallback(
		(value?: string) => {
			if (formData && formData.registrationAddress) {
				dispatch(
					employeeDetailsActions.updateEmployee({
						registrationAddress: {
							...formData.registrationAddress,
							address1: value || "",
						},
					})
				);
			}
		},
		[dispatch, formData]
	);

	const onChangeCity = useCallback(
		(city?: string) => {
			if (formData && formData.registrationAddress) {
				dispatch(
					employeeDetailsActions.updateEmployee({
						registrationAddress: {
							...formData.registrationAddress,
							city: city || "",
						},
					})
				);
			}
		},
		[dispatch, formData]
	);

	const onChangeZip = useCallback(
		(zip?: string) => {
			if (formData && formData.registrationAddress) {
				dispatch(
					employeeDetailsActions.updateEmployee({
						registrationAddress: {
							...formData.registrationAddress,
							zip: zip || "",
						},
					})
				);
			}
		},
		[dispatch, formData]
	);

	const onChangeCountry = useCallback(
		(country?: string) => {
			if (formData && formData.registrationAddress) {
				dispatch(
					employeeDetailsActions.updateEmployee({
						registrationAddress: {
							...formData.registrationAddress,
							country: country || "",
						},
					})
				);
			}
		},
		[dispatch, formData]
	);

	const onChangeDrivingLicenseNumber = useCallback(
		(license?: string) => {
			if (formData && formData.transportInfo?.drivingLicenseNumber) {
				dispatch(
					employeeDetailsActions.updateEmployee({
						transportInfo: {
							...formData.transportInfo,
							drivingLicenseNumber: license || "",
						},
					})
				);
			}
		},
		[dispatch, formData]
	);

	const onChangeE100CardNumber = useCallback(
		(card?: string) => {
			if (formData && formData.transportInfo?.e_100_CardNumber) {
				dispatch(
					employeeDetailsActions.updateEmployee({
						transportInfo: {
							...formData.transportInfo,
							e_100_CardNumber: card || "",
						},
					})
				);
			}
		},
		[dispatch, formData]
	);

	const onChangeExpectedKmPerDay = useCallback(
		(value?: string) => {
			if (formData && formData.transportInfo?.expectedKmPerDay) {
				dispatch(
					employeeDetailsActions.updateEmployee({
						transportInfo: {
							...formData.transportInfo,
							expectedKmPerDay: value || "",
						},
					})
				);
			}
		},
		[dispatch, formData]
	);

	const onChangePosition = useCallback(
		(value?: string) => {
			if (formData && formData.contractData?.position) {
				dispatch(
					employeeDetailsActions.updateEmployee({
						contractData: {
							...formData.contractData,
							position: value || "",
						},
					})
				);
			}
		},
		[dispatch, formData]
	);

	const onChangeContractNumber = useCallback(
		(value?: string) => {
			if (formData && formData.contractData?.contractNumber) {
				dispatch(
					employeeDetailsActions.updateEmployee({
						contractData: {
							...formData.contractData,
							contractNumber: value || "",
						},
					})
				);
			}
		},
		[dispatch, formData]
	);

	const onChangeAcceptionDate = (
		date?: Date | null,
		event?: React.SyntheticEvent<unknown, Event>
	) => {
		if (!event) return;
		dispatch(
			employeeDetailsActions.updateEmployee({
				contractData: {
					...formData?.contractData,
					acceptionDate: date || null,
				},
			})
		);
	};

	const onChangeDismissalDate = (
		date?: Date | null,
		event?: React.SyntheticEvent<unknown, Event>
	) => {
		if (!event) return;
		dispatch(
			employeeDetailsActions.updateEmployee({
				contractData: {
					...formData?.contractData,
					dismissalDate: date || null,
				},
			})
		);
	};

	const onChangeEmployementDays = useCallback(
		(value?: string) => {
			if (formData && formData.contractData?.employmentDays) {
				const numericValue = (value && parseInt(value, 10)) || 0;

				dispatch(
					employeeDetailsActions.updateEmployee({
						contractData: {
							...formData?.contractData,
							employmentDays: numericValue || 0,
						},
					})
				);
			}
		},
		[dispatch, formData]
	);

	const onChangeeAnnualHolidays = useCallback(
		(value?: string) => {
			if (formData && formData.contractData?.annualHolidays) {
				const numericValue = (value && parseInt(value, 10)) || 0;
				dispatch(
					employeeDetailsActions.updateEmployee({
						contractData: {
							...formData?.contractData,
							annualHolidays: numericValue || 0,
						},
					})
				);
			}
		},
		[dispatch, formData]
	);

	const onChangeFatherHolidays = useCallback(
		(value?: string) => {
			if (formData && formData.contractData?.fatherHolidays) {
				const numericValue = (value && parseInt(value, 10)) || 0;
				dispatch(
					employeeDetailsActions.updateEmployee({
						contractData: {
							...formData?.contractData,
							fatherHolidays: numericValue,
						},
					})
				);
			}
		},
		[dispatch, formData]
	);

	const onChangeUnpaidHolidays = useCallback(
		(value?: string) => {
			if (formData && formData.contractData?.unpaidHolidays) {
				const numericValue = (value && parseInt(value, 10)) || 0;
				dispatch(
					employeeDetailsActions.updateEmployee({
						contractData: {
							...formData?.contractData,
							unpaidHolidays: numericValue || 0,
						},
					})
				);
			}
		},
		[dispatch, formData]
	);

	const onChangeTruancyDays = useCallback(
		(value?: string) => {
			if (formData && formData.contractData?.truancyDays) {
				const numericValue = (value && parseInt(value, 10)) || 0;
				dispatch(
					employeeDetailsActions.updateEmployee({
						contractData: {
							...formData.contractData,
							truancyDays: numericValue || 0,
						},
					})
				);
			}
		},
		[dispatch, formData]
	);

	const onChangeAllowedAbsenceDays = useCallback(
		(value?: string) => {
			if (formData && formData.contractData?.allowedAbsenceDays) {
				const numericValue = (value && parseInt(value, 10)) || 0;

				dispatch(
					employeeDetailsActions.updateEmployee({
						contractData: {
							...formData.contractData,
							allowedAbsenceDays: numericValue || 0,
						},
					})
				);
			}
		},
		[dispatch, formData]
	);

	const onChangeUnusedHolidays = useCallback(
		(value?: string) => {
			if (formData && formData.contractData?.unusedHolidays) {
				const numericValue = (value && parseInt(value, 10)) || 0;

				dispatch(
					employeeDetailsActions.updateEmployee({
						contractData: {
							...formData.contractData,
							unusedHolidays: numericValue || 0,
						},
					})
				);
			}
		},
		[dispatch, formData]
	);

	// -------DOCUMENTS
	const onChangeDocumentTitle = useCallback(
		(index: number, title?: string) => {
			if (formData && formData.documents && formData.documents[index]) {
				const updatedDocuments = [...formData.documents];
				updatedDocuments[index] = {
					...updatedDocuments[index],
					title: title || "",
				};
				dispatch(
					employeeDetailsActions.updateEmployee({ documents: updatedDocuments })
				);
			}
		},
		[dispatch, formData]
	);

	const onChangeDocumentIssueDate = useCallback(
		(
			index: number,
			date?: Date | null,
			event?: React.SyntheticEvent<unknown, Event>
		) => {
			if (!event) return;
			if (formData && formData.documents && formData.documents[index]) {
				const updatedDocuments = [...formData.documents];
				updatedDocuments[index] = {
					...updatedDocuments[index],
					issueDate: date || null,
				};
				dispatch(
					employeeDetailsActions.updateEmployee({ documents: updatedDocuments })
				);
			}
		},
		[dispatch, formData]
	);

	const onChangeDocumentExpirationDate = useCallback(
		(
			index: number,
			date?: Date | null,
			event?: React.SyntheticEvent<unknown, Event>
		) => {
			if (!event) return;
			if (formData && formData.documents && formData.documents[index]) {
				const updatedDocuments = [...formData.documents];
				updatedDocuments[index] = {
					...updatedDocuments[index],
					expirationDate: date || null,
				};
				dispatch(
					employeeDetailsActions.updateEmployee({ documents: updatedDocuments })
				);
			}
		},
		[dispatch, formData]
	);

	return (
		<DynamicReducerLoader reducers={reducers}>
			<ColumnStack gap="8" max className={classNames("", [className], {})}>
				<EmployeeDetailsCardHeader />
				{validateErrors?.length &&
					validateErrors.map((err) => (
						<TextHolder
							data-testid="EditableProfileCard.Error"
							key={err}
							variant={"error"}
							text={validateErrorTranslates[err]}
						/>
					))}
				<EmployeeDetailsCardContent
					data={formData}
					data-testid="ProfileCard"
					isLoading={isLoading}
					error={error}
					readonly={readonly}
					onChangeFirstname={onChangeFirstname}
					onChangeLastname={onChangeLastname}
					onChangeBirthday={onChangeBirthDay}
					onChangeEmail={onChangeEmail}
					onChangePhoneNumber={onChangePhoneNumber}
					onChangeRegistrationAddress={onChangeRegistrationAddress}
					onChangeCity={onChangeCity}
					onChangeZip={onChangeZip}
					onChangeCountry={onChangeCountry}
					onChangeDrivingLicenseNumber={onChangeDrivingLicenseNumber}
					onChangeE100CardNumber={onChangeE100CardNumber}
					onChangeExpectedKmPerDay={onChangeExpectedKmPerDay}
					onChangePosition={onChangePosition}
					onChangeContractNumber={onChangeContractNumber}
					onChangeAcceptionDate={onChangeAcceptionDate}
					onChangeDismissalDate={onChangeDismissalDate}
					onChangeEmployementDays={onChangeEmployementDays}
					onChangeeAnnualHolidays={onChangeeAnnualHolidays}
					onChangeFatherHolidays={onChangeFatherHolidays}
					onChangeUnpaidHolidays={onChangeUnpaidHolidays}
					onChangeTruancyDays={onChangeTruancyDays}
					onChangeAllowedAbsenceDays={onChangeAllowedAbsenceDays}
					onChangeUnusedHolidays={onChangeUnusedHolidays}
					onChangeDocumentTitle={onChangeDocumentTitle}
					onChangeDocumentIssueDate={onChangeDocumentIssueDate}
					onChangeDocumentExpirationDate={onChangeDocumentExpirationDate}
				/>
			</ColumnStack>
		</DynamicReducerLoader>
	);
});
