import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Section } from "@/shared/ui/Section";
import { ColumnStack, RowStack } from "@/shared/ui/Stack";
import { Avatar } from "@/shared/ui/Avatar";
import { ContractDetails } from "../ContractDetails";
import { PersonalInformation } from "../PersonalInformation";
import { RegistrationAddress } from "../RegistrationAddress/RegistrationAddress";
import { TransportInfo } from "../TransportInfo";
import { DocumentsData } from "../DocumentsData";
export const EmployeeDetailsCardContent = memo(function EmployeeDetailsCardContent(props) {
    const { className, data } = props;
    return (_jsx(Section, { max: true, padding: "16", className: className, border: "partial", children: _jsxs(ColumnStack, { gap: "32", max: true, children: [data?.avatar && (_jsx(RowStack, { justify: "center", max: true, children: _jsx(Avatar, { size: 200, src: data?.avatar }) })), _jsx(PersonalInformation, { ...props }), data?.contractData && _jsx(ContractDetails, { ...props }), _jsx(RegistrationAddress, { ...props }), data?.transportInfo && _jsx(TransportInfo, { ...props }), data?.documents && _jsx(DocumentsData, { ...props })] }) }));
});
