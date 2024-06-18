import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./Avatar.module.scss";
import UserIcon from "../../assets/icons/user-blank.svg?react";
import { Skeleton } from "../Skeleton";
import { Glyph } from "../Glyph";
import { AppImage } from "../AppImage";
export const Avatar = ({ className, src, size = 100, alt }) => {
    const mods = {};
    const styles = useMemo(() => ({
        width: size,
        height: size,
    }), [size]);
    const fallback = _jsx(Skeleton, { width: size, height: size, border: "50%" });
    const fallbackError = (_jsx(Glyph, { width: size, height: size, SvgImage: UserIcon }));
    return (_jsx(AppImage, { fallback: fallback, fallbackError: fallbackError, src: src, alt: alt, style: styles, className: classNames(cls.avatar, [className], mods) }));
};
