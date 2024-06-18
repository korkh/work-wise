import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./DateInput.module.scss";
import { TextHolder } from "../TextHolder";
import { RowStack } from "../Stack";
export const DateInput = memo(function DateInput({ className, label, onChange, readonly, gap = "8", width, justify = "center", ...props }) {
    const dynamicWidth = width ? { width } : {};
    return (_jsxs(RowStack, { max: true, gap: gap, justify: justify, children: [_jsx(TextHolder, { text: label }), _jsx("div", { style: dynamicWidth, className: classNames(cls.dateInput, [className], {
                    [cls.readonly]: readonly,
                }), children: _jsx(DatePicker, { className: classNames(cls.input), onChange: onChange || ((_, _event) => { }), ...props }) })] }));
});
