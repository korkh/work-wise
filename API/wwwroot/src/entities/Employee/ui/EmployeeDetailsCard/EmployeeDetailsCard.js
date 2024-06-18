import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { getEmployeeDetailsError, getEmployeeDetailsIsLoading, getEmployeeForm, getEmployeeReadonly, getEmployeeValidateErrors, } from "../../model/selectors/employeeDetails";
import { useSelector } from "react-redux";
import { TextHolder } from "@/shared/ui/TextHolder";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ValidateEmployeeError } from "../../model/consts/validateEmployeeError";
import { fetchEmployeeByID } from "../../model/services/fetchEmployeeById/fetchEmployeeById";
import { employeeDetailsActions, employeeDetailsReducer, } from "../../model/slices/employeeDetailsSlice";
import { EmployeeDetailsCardHeader } from "../EmployeeDetailsCardHeader/EmployeeDetailsCardHeader";
import { EmployeeDetailsCardContent } from "../EmployeeDetailsCardContent";
import { ColumnStack } from "@/shared/ui/Stack";
import { DynamicReducerLoader, } from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { useInitEffect } from "@/shared/lib/hooks/useInitEffect/useInitEffect";
const reducers = {
    employeeDetails: employeeDetailsReducer,
};
export const EmployeeDetailsCard = memo(function EmployeeDetailsCard(props) {
    const { className, employeeId } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const formData = useSelector(getEmployeeForm);
    const isLoading = useSelector(getEmployeeDetailsIsLoading);
    const error = useSelector(getEmployeeDetailsError);
    const readonly = useSelector(getEmployeeReadonly);
    const validateErrors = useSelector(getEmployeeValidateErrors);
    const validateErrorTranslates = {
        [ValidateEmployeeError.INCORRECT_EMPLOYEE_DATA]: t("errors.incorrect_employee_data"),
        [ValidateEmployeeError.INCORRECT_BIRTHDATE]: t("errors.incorrect_birthdate"),
        [ValidateEmployeeError.INCORRECT_REGISTRATION_ADDRESS]: t("errors.incorrect_registration_address"),
        [ValidateEmployeeError.INCORRECT_PHONE_NUMBER]: t("errors.incorrect_phone_number"),
        [ValidateEmployeeError.INCORRECT_EMAIL]: t("errors.incorrect_email"),
        [ValidateEmployeeError.INCORRECT_TRANSPORT_INFO]: t("errors.incorrect_transport_info"),
        [ValidateEmployeeError.INCORRECT_CONTRACT_DATA]: t("errors.incorrect_contract_data"),
        [ValidateEmployeeError.INCORRECT_DOCUMENTS_DATA]: t("errors.incorrect_documents_data"),
        [ValidateEmployeeError.INCORRECT_PAYROLLS_DATA]: t("errors.incorrect_payrolls_data"),
        [ValidateEmployeeError.NO_DATA]: t("errors.no_data"),
        [ValidateEmployeeError.SERVER_ERROR]: t("errors.server_error"),
    };
    useInitEffect(() => {
        if (employeeId) {
            dispatch(fetchEmployeeByID(employeeId));
        }
    });
    const onChangeFirstname = useCallback((value) => {
        dispatch(employeeDetailsActions.updateEmployee({ firstName: value || "" }));
    }, [dispatch]);
    const onChangeLastname = useCallback((value) => {
        dispatch(employeeDetailsActions.updateEmployee({ lastName: value || "" }));
    }, [dispatch]);
    const onChangeBirthDay = (date, event) => {
        if (!event)
            return;
        dispatch(employeeDetailsActions.updateEmployee({
            birthDay: date || null,
        }));
    };
    const onChangeEmail = useCallback((value) => {
        dispatch(employeeDetailsActions.updateEmployee({ email: value || "" }));
    }, [dispatch]);
    const onChangePhoneNumber = useCallback((value) => {
        dispatch(employeeDetailsActions.updateEmployee({ phoneNumber: value || "" }));
    }, [dispatch]);
    const onChangeRegistrationAddress = useCallback((value) => {
        if (formData && formData.registrationAddress) {
            dispatch(employeeDetailsActions.updateEmployee({
                registrationAddress: {
                    ...formData.registrationAddress,
                    address1: value || "",
                },
            }));
        }
    }, [dispatch, formData]);
    const onChangeCity = useCallback((city) => {
        if (formData && formData.registrationAddress) {
            dispatch(employeeDetailsActions.updateEmployee({
                registrationAddress: {
                    ...formData.registrationAddress,
                    city: city || "",
                },
            }));
        }
    }, [dispatch, formData]);
    const onChangeZip = useCallback((zip) => {
        if (formData && formData.registrationAddress) {
            dispatch(employeeDetailsActions.updateEmployee({
                registrationAddress: {
                    ...formData.registrationAddress,
                    zip: zip || "",
                },
            }));
        }
    }, [dispatch, formData]);
    const onChangeCountry = useCallback((country) => {
        if (formData && formData.registrationAddress) {
            dispatch(employeeDetailsActions.updateEmployee({
                registrationAddress: {
                    ...formData.registrationAddress,
                    country: country || "",
                },
            }));
        }
    }, [dispatch, formData]);
    const onChangeDrivingLicenseNumber = useCallback((license) => {
        if (formData && formData.transportInfo?.drivingLicenseNumber) {
            dispatch(employeeDetailsActions.updateEmployee({
                transportInfo: {
                    ...formData.transportInfo,
                    drivingLicenseNumber: license || "",
                },
            }));
        }
    }, [dispatch, formData]);
    const onChangeE100CardNumber = useCallback((card) => {
        if (formData && formData.transportInfo?.e_100_CardNumber) {
            dispatch(employeeDetailsActions.updateEmployee({
                transportInfo: {
                    ...formData.transportInfo,
                    e_100_CardNumber: card || "",
                },
            }));
        }
    }, [dispatch, formData]);
    const onChangeExpectedKmPerDay = useCallback((value) => {
        if (formData && formData.transportInfo?.expectedKmPerDay) {
            dispatch(employeeDetailsActions.updateEmployee({
                transportInfo: {
                    ...formData.transportInfo,
                    expectedKmPerDay: value || "",
                },
            }));
        }
    }, [dispatch, formData]);
    const onChangePosition = useCallback((value) => {
        if (formData && formData.contractData?.position) {
            dispatch(employeeDetailsActions.updateEmployee({
                contractData: {
                    ...formData.contractData,
                    position: value || "",
                },
            }));
        }
    }, [dispatch, formData]);
    const onChangeContractNumber = useCallback((value) => {
        if (formData && formData.contractData?.contractNumber) {
            dispatch(employeeDetailsActions.updateEmployee({
                contractData: {
                    ...formData.contractData,
                    contractNumber: value || "",
                },
            }));
        }
    }, [dispatch, formData]);
    const onChangeAcceptionDate = (date, event) => {
        if (!event)
            return;
        dispatch(employeeDetailsActions.updateEmployee({
            contractData: {
                ...formData?.contractData,
                acceptionDate: date || null,
            },
        }));
    };
    const onChangeDismissalDate = (date, event) => {
        if (!event)
            return;
        dispatch(employeeDetailsActions.updateEmployee({
            contractData: {
                ...formData?.contractData,
                dismissalDate: date || null,
            },
        }));
    };
    const onChangeEmployementDays = useCallback((value) => {
        if (formData && formData.contractData?.employmentDays) {
            const numericValue = (value && parseInt(value, 10)) || 0;
            dispatch(employeeDetailsActions.updateEmployee({
                contractData: {
                    ...formData?.contractData,
                    employmentDays: numericValue || 0,
                },
            }));
        }
    }, [dispatch, formData]);
    const onChangeeAnnualHolidays = useCallback((value) => {
        if (formData && formData.contractData?.annualHolidays) {
            const numericValue = (value && parseInt(value, 10)) || 0;
            dispatch(employeeDetailsActions.updateEmployee({
                contractData: {
                    ...formData?.contractData,
                    annualHolidays: numericValue || 0,
                },
            }));
        }
    }, [dispatch, formData]);
    const onChangeFatherHolidays = useCallback((value) => {
        if (formData && formData.contractData?.fatherHolidays) {
            const numericValue = (value && parseInt(value, 10)) || 0;
            dispatch(employeeDetailsActions.updateEmployee({
                contractData: {
                    ...formData?.contractData,
                    fatherHolidays: numericValue,
                },
            }));
        }
    }, [dispatch, formData]);
    const onChangeUnpaidHolidays = useCallback((value) => {
        if (formData && formData.contractData?.unpaidHolidays) {
            const numericValue = (value && parseInt(value, 10)) || 0;
            dispatch(employeeDetailsActions.updateEmployee({
                contractData: {
                    ...formData?.contractData,
                    unpaidHolidays: numericValue || 0,
                },
            }));
        }
    }, [dispatch, formData]);
    const onChangeTruancyDays = useCallback((value) => {
        if (formData && formData.contractData?.truancyDays) {
            const numericValue = (value && parseInt(value, 10)) || 0;
            dispatch(employeeDetailsActions.updateEmployee({
                contractData: {
                    ...formData.contractData,
                    truancyDays: numericValue || 0,
                },
            }));
        }
    }, [dispatch, formData]);
    const onChangeAllowedAbsenceDays = useCallback((value) => {
        if (formData && formData.contractData?.allowedAbsenceDays) {
            const numericValue = (value && parseInt(value, 10)) || 0;
            dispatch(employeeDetailsActions.updateEmployee({
                contractData: {
                    ...formData.contractData,
                    allowedAbsenceDays: numericValue || 0,
                },
            }));
        }
    }, [dispatch, formData]);
    const onChangeUnusedHolidays = useCallback((value) => {
        if (formData && formData.contractData?.unusedHolidays) {
            const numericValue = (value && parseInt(value, 10)) || 0;
            dispatch(employeeDetailsActions.updateEmployee({
                contractData: {
                    ...formData.contractData,
                    unusedHolidays: numericValue || 0,
                },
            }));
        }
    }, [dispatch, formData]);
    // -------DOCUMENTS
    const onChangeDocumentTitle = useCallback((index, title) => {
        if (formData && formData.documents && formData.documents[index]) {
            const updatedDocuments = [...formData.documents];
            updatedDocuments[index] = {
                ...updatedDocuments[index],
                title: title || "",
            };
            dispatch(employeeDetailsActions.updateEmployee({ documents: updatedDocuments }));
        }
    }, [dispatch, formData]);
    const onChangeDocumentIssueDate = useCallback((index, date, event) => {
        if (!event)
            return;
        if (formData && formData.documents && formData.documents[index]) {
            const updatedDocuments = [...formData.documents];
            updatedDocuments[index] = {
                ...updatedDocuments[index],
                issueDate: date || null,
            };
            dispatch(employeeDetailsActions.updateEmployee({ documents: updatedDocuments }));
        }
    }, [dispatch, formData]);
    const onChangeDocumentExpirationDate = useCallback((index, date, event) => {
        if (!event)
            return;
        if (formData && formData.documents && formData.documents[index]) {
            const updatedDocuments = [...formData.documents];
            updatedDocuments[index] = {
                ...updatedDocuments[index],
                expirationDate: date || null,
            };
            dispatch(employeeDetailsActions.updateEmployee({ documents: updatedDocuments }));
        }
    }, [dispatch, formData]);
    return (_jsx(DynamicReducerLoader, { reducers: reducers, children: _jsxs(ColumnStack, { gap: "8", max: true, className: classNames("", [className], {}), children: [_jsx(EmployeeDetailsCardHeader, {}), validateErrors?.length &&
                    validateErrors.map((err) => (_jsx(TextHolder, { "data-testid": "EditableProfileCard.Error", variant: "error", text: validateErrorTranslates[err] }, err))), _jsx(EmployeeDetailsCardContent, { data: formData, "data-testid": "ProfileCard", isLoading: isLoading, error: error, readonly: readonly, onChangeFirstname: onChangeFirstname, onChangeLastname: onChangeLastname, onChangeBirthday: onChangeBirthDay, onChangeEmail: onChangeEmail, onChangePhoneNumber: onChangePhoneNumber, onChangeRegistrationAddress: onChangeRegistrationAddress, onChangeCity: onChangeCity, onChangeZip: onChangeZip, onChangeCountry: onChangeCountry, onChangeDrivingLicenseNumber: onChangeDrivingLicenseNumber, onChangeE100CardNumber: onChangeE100CardNumber, onChangeExpectedKmPerDay: onChangeExpectedKmPerDay, onChangePosition: onChangePosition, onChangeContractNumber: onChangeContractNumber, onChangeAcceptionDate: onChangeAcceptionDate, onChangeDismissalDate: onChangeDismissalDate, onChangeEmployementDays: onChangeEmployementDays, onChangeeAnnualHolidays: onChangeeAnnualHolidays, onChangeFatherHolidays: onChangeFatherHolidays, onChangeUnpaidHolidays: onChangeUnpaidHolidays, onChangeTruancyDays: onChangeTruancyDays, onChangeAllowedAbsenceDays: onChangeAllowedAbsenceDays, onChangeUnusedHolidays: onChangeUnusedHolidays, onChangeDocumentTitle: onChangeDocumentTitle, onChangeDocumentIssueDate: onChangeDocumentIssueDate, onChangeDocumentExpirationDate: onChangeDocumentExpirationDate })] }) }));
});
