import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { RowStack, ColumnStack } from "@/shared/ui/Stack";
import { TextHolder } from "@/shared/ui/TextHolder";
import { toast } from "react-toastify";
import { Input } from "@/shared/ui/Input";
import { useTranslation } from "react-i18next";
import { DateInput } from "@/shared/ui/DateInput";
export const DocumentsData = memo(function DocumentsData(props) {
    const { data, readonly, onChangeDocumentTitle, onChangeDocumentIssueDate, onChangeDocumentExpirationDate, } = props;
    const { t } = useTranslation();
    if (!data && data !== undefined) {
        toast.error("NO DOCUMENTS FOUND. TRY AGAIN LATER");
        return _jsx(TextHolder, { title: "NO DOCUMENTS FOUND!" });
    }
    return (_jsx(RowStack, { gap: "24", max: true, children: _jsxs(ColumnStack, { gap: "16", max: true, children: [_jsx(TextHolder, { title: "Employee's documents" }), data?.documents?.map((doc, index) => (_jsxs(_Fragment, { children: [_jsx(Input, { size: "s", width: "97%", value: doc.title, label: t("Title"), onChange: (newTitle) => onChangeDocumentTitle && onChangeDocumentTitle(index, newTitle), readonly: readonly, "data-testid": "DocumentsData.title" }), _jsx(DateInput, { gap: "8", width: "93%", label: t("Issue date"), selected: doc.issueDate, onChange: (newDate, event) => onChangeDocumentIssueDate &&
                                onChangeDocumentIssueDate(index, newDate, event), readonly: readonly, "data-testid": "DocumentsData.issueDate" }), _jsx(DateInput, { gap: "8", width: "92%", selected: doc.expirationDate, onChange: (newDate, event) => onChangeDocumentExpirationDate &&
                                onChangeDocumentExpirationDate(index, newDate, event), label: t("Expire date"), readonly: readonly, "data-testid": "DocumentsData.expirationDate" })] })))] }) }));
});
