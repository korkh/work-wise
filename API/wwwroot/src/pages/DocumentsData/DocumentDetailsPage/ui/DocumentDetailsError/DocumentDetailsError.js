import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import { RowStack } from "@/shared/ui/Stack";
import { TextHolder } from "@/shared/ui/TextHolder";
export const DocumentDetailsError = () => {
    const { t } = useTranslation();
    return (_jsx(RowStack, { justify: "center", max: true, children: _jsx(TextHolder, { variant: "error", title: t("Document loading error"), text: t("Try to refresh your page"), align: "center", style: { marginTop: 30 } }) }));
};
