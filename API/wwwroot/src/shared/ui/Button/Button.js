import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames, } from "../../lib/utils/classNames/classNames";
import cls from "./Button.module.scss";
import { forwardRef, } from "react";
export const Button = forwardRef(function Button(props, ref) {
    const { className, children, variant = "outline", square, disabled, maxWidth, size = "m", bufferLeft, bufferRight, color = "normal", ...otherProps } = props;
    const mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.maxWidth]: maxWidth,
        [cls.withBuffer]: Boolean(bufferLeft) || Boolean(bufferRight),
    };
    const additionalClasses = [
        className,
        cls[variant],
        cls[size],
        cls[color],
    ];
    return (_jsxs("button", { ref: ref, className: classNames(cls.button, additionalClasses, mods), type: "button", disabled: disabled, ...otherProps, children: [_jsx("div", { className: cls.bufferLeft, children: bufferLeft }), children, _jsx("div", { className: cls.bufferRight, children: bufferRight })] }));
});
