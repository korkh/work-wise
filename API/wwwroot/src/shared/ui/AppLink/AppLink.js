import { jsx as _jsx } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
import { memo } from "react";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./AppLink.module.scss";
export const AppLink = memo(function AppLink(props) {
    const { to, className, children, variant = "primary", activeClassName = "", ...otherProps } = props;
    return (_jsx(NavLink, { to: to, className: ({ isActive }) => classNames(cls.AppLink, [className, cls[variant]], {
            [activeClassName]: isActive,
        }), ...otherProps, children: children }));
});
