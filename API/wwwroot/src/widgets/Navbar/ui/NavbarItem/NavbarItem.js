import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./NavbarItem.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { AppLink } from "@/shared/ui/AppLink";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { Dropdown } from "@/shared/ui/Popups/ui/Dropdown";
export const NavbarItem = memo(function NavbarItem(props) {
    const { className, item, dropDownItems, activeItem, setActiveItem } = props;
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);
    if (item.authOnly && !isAuth) {
        return null;
    }
    const isActive = activeItem === item.path ||
        dropDownItems?.some((i) => i.href === location.pathname);
    const mods = {
        [cls.active]: isActive,
    };
    if (dropDownItems) {
        return (_jsx(Dropdown, { variant: "clear", className: classNames("", [className], mods), items: dropDownItems, trigger: _jsx("span", { className: cls.link, children: t(item.text) }) }));
    }
    return (_jsx(AppLink, { to: item.path, className: classNames(cls.item, [className], mods), activeClassName: cls.active, onClick: () => setActiveItem && setActiveItem(item.path), children: _jsx("span", { className: cls.link, children: t(item.text) }) }));
});
