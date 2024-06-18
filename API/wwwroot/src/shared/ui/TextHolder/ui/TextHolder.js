import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./TextHolder.module.scss";
const mapSizeToClass = {
    s: cls.size_s,
    sm: cls.size_sm,
    m: cls.size_m,
    l: cls.size_l,
};
const mapSizeToHeaderTag = {
    s: "h4",
    sm: "h3",
    m: "h2",
    l: "h1",
};
export const TextHolder = memo(function TextHolder(props) {
    const { className, text, title, variant = "primary", align = "left", size = "sm", bold, "data-testid": dataTestId = "Text", style, } = props;
    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];
    const additionalClasses = [className, cls[variant], cls[align], sizeClass];
    return (_jsxs("div", { className: classNames(cls.text, additionalClasses, { [cls.bold]: bold }), style: style, children: [title && (_jsx(HeaderTag, { className: cls.title, "data-testid": `${dataTestId}.Header`, children: title })), text && (_jsx("p", { className: cls.text, "data-testid": `${dataTestId}.Paragraph`, children: text }))] }));
});
