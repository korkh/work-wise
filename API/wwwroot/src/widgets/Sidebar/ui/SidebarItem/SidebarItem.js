import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./SidebarItem.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { AppLink } from "@/shared/ui/AppLink";
import { Glyph } from "@/shared/ui/Glyph";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
export const SidebarItem = memo(function SidebarItem(props) {
    const { item, collapsed } = props;
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);
    if (item.authOnly && !isAuth) {
        return null;
    }
    return (_jsxs(AppLink, { to: item.path, className: classNames(cls.item, [], {
            [cls.collapsed]: collapsed,
        }), activeClassName: cls.active, children: [_jsx(Glyph, { width: 32, height: 32, SvgImage: item.Icon }), !collapsed && (_jsx("span", { className: classNames(cls.link, [], {}), children: t(item.text) }))] }));
});
