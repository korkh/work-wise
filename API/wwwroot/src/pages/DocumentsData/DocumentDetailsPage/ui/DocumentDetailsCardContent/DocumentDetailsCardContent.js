import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { Section } from "@/shared/ui/Section";
import { ColumnStack } from "@/shared/ui/Stack";
import { DocumentDetailsData } from "../DocumentDetailsData";
export const DocumentDetailsCardContent = memo(function DocumentDetailsCardContent(props) {
    const { className } = props;
    return (_jsx(Section, { max: true, padding: "16", className: className, border: "partial", children: _jsx(ColumnStack, { gap: "32", max: true, children: _jsx(DocumentDetailsData, { ...props }) }) }));
});
