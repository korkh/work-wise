import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Input } from "@/shared/ui/Input";
import { RowStack, ColumnStack } from "@/shared/ui/Stack";
import { TextHolder } from "@/shared/ui/TextHolder";
export const RegistrationAddress = memo(function RegistrationAddress(props) {
    const { data, readonly, onChangeRegistrationAddress, onChangeCity, onChangeZip, onChangeCountry, } = props;
    const { t } = useTranslation();
    return (_jsx(RowStack, { gap: "24", max: true, children: _jsxs(ColumnStack, { gap: "16", max: true, children: [_jsx(TextHolder, { title: "Registration address" }), _jsx(Input, { size: "s", value: data?.registrationAddress?.address1, label: t("Address"), onChange: onChangeRegistrationAddress, readonly: readonly, "data-testid": "EmployeeDetailsCard.address" }), _jsx(Input, { size: "s", value: data?.registrationAddress?.city, label: t("City"), onChange: onChangeCity, readonly: readonly, "data-testid": "EmployeeDetailsCard.city" }), _jsx(Input, { size: "s", value: data?.registrationAddress?.zip, label: t("ZIP"), onChange: onChangeZip, readonly: readonly, "data-testid": "EmployeeDetailsCard.zip" }), _jsx(Input, { size: "s", value: data?.registrationAddress?.country, label: t("Country"), onChange: onChangeCountry, readonly: readonly, "data-testid": "EmployeeDetailsCard.country" })] }) }));
});
