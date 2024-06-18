import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { DateInput } from "@/shared/ui/DateInput";
import { Input } from "@/shared/ui/Input";
import { ColumnStack, RowStack } from "@/shared/ui/Stack";
import { TextHolder } from "@/shared/ui/TextHolder";
export const PersonalInformation = memo(function PersonalInformation(props) {
    const { data, readonly, onChangeFirstname, onChangeLastname, onChangeBirthday, onChangeEmail, onChangePhoneNumber, } = props;
    const { t } = useTranslation();
    return (_jsx(RowStack, { gap: "24", max: true, children: _jsxs(ColumnStack, { gap: "16", max: true, children: [_jsx(TextHolder, { title: "Personal information" }), _jsx(Input, { size: "s", value: data?.firstName, label: t("Firstname"), onChange: onChangeFirstname, readonly: readonly, "data-testid": "EmployeeDetailsCard.firstName" }), _jsx(Input, { size: "s", value: data?.lastName, label: t("Lastname"), onChange: onChangeLastname, readonly: readonly, "data-testid": "EmployeeDetailsCard.lastName" }), _jsx(DateInput, { selected: data?.birthDay, onChange: onChangeBirthday || ((_, _event) => { }), label: t("Birthday"), readonly: readonly, "data-testid": "EmployeeDetailsCard.birthDay" }), _jsx(Input, { size: "s", value: data?.email, label: t("Email"), onChange: onChangeEmail, readonly: readonly, "data-testid": "EmployeeDetailsCard.email" }), _jsx(Input, { size: "s", width: "88%", justify: "between", value: data?.phoneNumber, label: t("Phone number"), onChange: onChangePhoneNumber, readonly: readonly, "data-testid": "EmployeeDetailsCard.phoneNumber" })] }) }));
});
