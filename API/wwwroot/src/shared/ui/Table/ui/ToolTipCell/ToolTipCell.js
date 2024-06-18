import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./ToolTipCell.module.scss";
import { memo } from "react";
import { truncateString } from "@/shared/lib/utils/table/truncateString/truncateString";
export const ToolTipCell = memo(function ToolTipCell(props) {
    const { className, str, num } = props;
    return (_jsxs("div", { className: classNames(cls.cellTooltip, [className], {}), children: [_jsx("span", { children: truncateString(str, num) }), String(str).length > num && (_jsx("span", { className: cls.tooltipText, children: str }))] }));
});
