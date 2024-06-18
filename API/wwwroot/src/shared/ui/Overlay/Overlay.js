import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./Overlay.module.scss";
export const Overlay = memo(function Overlay(props) {
    const { className, onClick } = props;
    return (_jsx("div", { onClick: onClick, className: classNames(cls.Overlay, [className], {}) }));
});
