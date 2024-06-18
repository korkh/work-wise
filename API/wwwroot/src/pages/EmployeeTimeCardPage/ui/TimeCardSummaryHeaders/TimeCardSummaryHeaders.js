import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ToolTipCell } from "@/shared/ui/Table/ui/ToolTipCell";
export const TimeCardSummaryHeaders = memo(function TimeCardSummaryHeaders({ className, }) {
    const { t } = useTranslation("timecards");
    return (_jsxs(_Fragment, { children: [_jsx("th", { className: className, children: _jsx(ToolTipCell, { str: t("Working Days"), num: 10 }) }), _jsx("th", { className: className, children: _jsx(ToolTipCell, { str: t("Working Hours"), num: 10 }) }), _jsx("th", { className: className, children: t("Overtime") }), _jsx("th", { className: className, children: _jsx(ToolTipCell, { str: t("Overtime P & S"), num: 10 }) }), _jsx("th", { className: className, children: _jsx(ToolTipCell, { str: t("K"), num: 10 }) }), _jsx("th", { className: className, children: _jsx(ToolTipCell, { str: t("A"), num: 10 }) }), _jsx("th", { className: className, children: _jsx(ToolTipCell, { str: t("NA"), num: 10 }) }), _jsx("th", { className: className, children: _jsx(ToolTipCell, { str: t("PV"), num: 10 }) }), _jsx("th", { className: className, children: _jsx(ToolTipCell, { str: t("PB"), num: 10 }) }), _jsx("th", { className: className, children: t("L") }), _jsx("th", { className: className, children: t("Absence") })] }));
});
