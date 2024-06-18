import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AppSvg from "@/shared/assets/icons/app-image.svg?react";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { memo } from "react";
import { RowStack } from "../Stack";
import cls from "./AppLogo.module.scss";
export const AppLogo = memo(function AppLogo({ className, size = 50, width, height, }) {
    return (_jsxs(RowStack, { max: true, justify: "center", className: classNames(cls.appLogoWrapper, [className], {}), children: [_jsx(AppSvg, { width: width ? width : size, height: height ? height : size, color: "black", className: cls.appLogo }), _jsx("div", { className: cls.gradientBig }), _jsx("div", { className: cls.gradientSmall })] }));
});
