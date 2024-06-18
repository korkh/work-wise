import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { toast } from "react-toastify";
import { TextHolder } from "@/shared/ui/TextHolder";
import { ColumnStack, RowStack } from "@/shared/ui/Stack";
import { Input } from "@/shared/ui/Input";
import { DateInput } from "@/shared/ui/DateInput";
export const DocumentDetailsData = memo(function DocumentDetailsData(props) {
    const { data, readonly, onChangeDocumentExpirationDate, onChangeDocumentIssueDate, onChangeDocumentTitle, } = props;
    const { t } = useTranslation();
    if (!data && data !== undefined) {
        toast.error("NO DOCUMENTS FOUND. TRY AGAIN LATER");
        return _jsx(TextHolder, { title: "NO DOCUMENTS FOUND!" });
    }
    return (_jsx(RowStack, { gap: "24", max: true, children: _jsxs(ColumnStack, { gap: "16", max: true, children: [_jsx(TextHolder, { title: "Employee's documents" }), _jsx(Input, { size: "s", width: "97%", value: data?.title, label: t("Title"), onChange: (newTitle) => onChangeDocumentTitle && onChangeDocumentTitle(newTitle), readonly: readonly, "data-testid": "DocumentsData.title" }), _jsx(DateInput, { gap: "8", width: "93%", label: t("Issue date"), selected: data?.issueDate, onChange: (newDate, event) => onChangeDocumentIssueDate &&
                        onChangeDocumentIssueDate(newDate, event), readonly: readonly, "data-testid": "DocumentsData.issueDate" }), _jsx(DateInput, { gap: "8", width: "92%", selected: data?.expirationDate, onChange: (newDate, event) => onChangeDocumentExpirationDate &&
                        onChangeDocumentExpirationDate(newDate, event), label: t("Expire date"), readonly: readonly, "data-testid": "DocumentsData.expirationDate" })] }) }));
});
