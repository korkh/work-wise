import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { memo, useMemo, useState } from "react";
import { useSidebarItems } from "../../model/selectors/getSidebarItems";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { ColumnStack } from "@/shared/ui/Stack";
import { Glyph } from "@/shared/ui/Glyph";
import ArrowIcon from "@/shared/assets/icons/arrow-bottom.svg?react";
import { AppLogo } from "@/shared/ui/AppLogo";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
export const Sidebar = memo(function Sidebar(props) {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSidebarItems();
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    const itemsList = useMemo(() => sidebarItemsList.map((item) => (_jsx(SidebarItem, { item: item, collapsed: collapsed }, item.path))), [collapsed, sidebarItemsList]);
    return (_jsxs("aside", { "data-testid": "sidebar", className: classNames(cls.sidebar, [className], {
            [cls.collapsed]: collapsed,
        }), children: [_jsx(AppLogo, { size: collapsed ? 0 : 150, className: cls.appLogo }), _jsx(ColumnStack, { role: "navigation", gap: "16", className: cls.items, children: itemsList }), _jsx(Glyph, { "data-testid": "sidebar-toggle", onClick: onToggle, className: cls.collapseBtn, SvgImage: ArrowIcon, clickable: true }), _jsx("div", { className: cls.switchers, children: _jsx(ThemeSwitcher, {}) })] }));
});
