import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useEffect, useRef, useState, } from "react";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./Input.module.scss";
import { TextHolder } from "../TextHolder";
import { RowStack } from "../Stack";
export const Input = memo(function Input(props) {
    const { className, value, onChange, type = "text", placeholder, autofocus, readonly, bufferLeft, bufferRight, label, size = "m", gap = "8", width, justify, ...otherProps } = props;
    const ref = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);
    const onChangeHandler = (e) => {
        onChange?.(e.target.value);
    };
    const onBlur = () => {
        setIsFocused(false);
    };
    const onFocus = () => {
        setIsFocused(true);
    };
    const mods = {
        [cls.readonly]: readonly,
        [cls.focused]: isFocused,
        [cls.withBuffer]: Boolean(bufferLeft) || Boolean(bufferRight),
    };
    const dynamicStyle = width ? { width } : {};
    const input = (_jsxs("div", { className: classNames(cls.inputWrapper, [className, cls[size]], mods), style: dynamicStyle, children: [_jsx("div", { className: cls.bufferLeft, children: bufferLeft }), _jsx("input", { ref: ref, type: type, value: value, onChange: onChangeHandler, className: cls.input, onFocus: onFocus, onBlur: onBlur, readOnly: readonly, placeholder: placeholder, ...otherProps }), _jsx("div", { className: cls.bufferRight, children: bufferRight })] }));
    if (label) {
        return (_jsxs(RowStack, { max: true, gap: gap, justify: justify, children: [_jsx(TextHolder, { text: label }), input] }));
    }
    return input;
});
