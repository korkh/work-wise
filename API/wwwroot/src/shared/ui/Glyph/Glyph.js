import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./Glyph.module.scss";
import { memo } from "react";
export const Glyph = memo(function Glyph(props) {
    const { className, SvgImage, width = 32, height = 32, clickable, ...otherProps } = props;
    const image = (_jsx(SvgImage, { className: classNames(cls.glyph, [className], {}), width: width, height: height, ...otherProps, onClick: undefined }));
    if (clickable) {
        return (_jsx("button", { type: "button", className: cls.button, onClick: props.onClick, style: { height, width }, children: image }));
    }
    return image;
});
