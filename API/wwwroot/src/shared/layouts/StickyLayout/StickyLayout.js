import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import cls from "./StickyLayout.module.scss";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
export const StickyLayout = memo(function StickyContentLayout(props) {
    const { className, content, top, left, right } = props;
    return (_jsxs("div", { className: classNames(cls.mainLayout, [className], {}), children: [top && _jsx("div", { className: cls.top, children: top }), left && _jsx("div", { className: cls.left, children: left }), _jsx("div", { className: cls.content, children: content }), right && _jsx("div", { className: cls.right, children: right })] }));
});
