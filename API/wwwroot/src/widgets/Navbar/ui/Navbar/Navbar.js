import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Button } from "@/shared/ui/Button";
import { SignInModal } from "@/features/LoginAuth";
import { UserDropdown } from "@/features/UserDropdown";
import { useNavbarItems } from "../../model/selectors/getNavbarItems";
import { useAuthToken } from "@/shared/lib/hooks/useAuthToken/useAuthToken";
import { NavbarItem } from "../NavbarItem";
import { AppLogo } from "@/shared/ui/AppLogo";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { RowStack } from "@/shared/ui/Stack";
import { getUserAuthData } from "@/entities/User";
import { useSelector } from "react-redux";
import { LanguageSwitcher } from "@/features/LanguageSwitcher";
import { getRouteBusinessTrips, getRouteBusinessTripsSummaries, } from "@/shared/consts/routerConsts";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { Hamburger } from "@/shared/ui/Hamburger";
import { useMobile } from "@/shared/lib/hooks/useMobile/useMobile";
const Navbar = memo(function Navbar({ className }) {
    const { t } = useTranslation("navbar");
    const [isAuthModal, setIsAuthModal] = useState(false);
    const userData = useAuthToken();
    const userAuth = useSelector(getUserAuthData);
    const [activeItem, setActiveItem] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const navbarItemsList = useNavbarItems({ userData });
    const dropdownRef = useRef(null);
    const isMobile = useMobile();
    console.log(isMobile);
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);
    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };
    const handleClickOutside = (event) => {
        if (dropdownRef.current &&
            !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const itemsList = useMemo(() => {
        const dropdownItems = [
            {
                content: t("Business trips summaries"),
                href: getRouteBusinessTripsSummaries(),
                onClick: () => {
                    setActiveItem(getRouteBusinessTripsSummaries());
                    setIsOpen(false);
                },
            },
            {
                content: t("Business trips"),
                href: getRouteBusinessTrips(),
                onClick: () => {
                    setActiveItem(getRouteBusinessTrips());
                    setIsOpen(false);
                },
            },
        ];
        return navbarItemsList.map((item) => {
            if (item.text === "Business trips" || item.text === "Komandiruotės") {
                return (_jsx(NavbarItem, { item: item, dropDownItems: dropdownItems, activeItem: activeItem, setActiveItem: (path) => {
                        setActiveItem(path);
                        setIsOpen(false);
                    } }, item.path));
            }
            return (_jsx(NavbarItem, { item: item, activeItem: activeItem, setActiveItem: (path) => {
                    setActiveItem(path);
                    setIsOpen(false);
                } }, item.path));
        });
    }, [activeItem, navbarItemsList, t]);
    return (_jsxs(RowStack, { gap: "32", className: classNames(cls.navbar, [className], {}), justify: "between", align: "center", children: [_jsxs(RowStack, { gap: "32", className: cls.items, children: [_jsx(AppLogo, { width: 100, height: 50, className: cls.appLogo }), isMobile && _jsx(Hamburger, { isOpen: isOpen, toggle: toggleDropdown })] }), _jsx(RowStack, { gap: "32", className: cls.navItems, children: itemsList }), isOpen && (_jsx("div", { className: cls.dropdownMenu, ref: dropdownRef, children: itemsList })), userAuth ? (_jsxs(RowStack, { gap: "32", className: cls.actions, align: "center", children: [_jsx(ThemeSwitcher, {}), _jsx(LanguageSwitcher, { abbreviated: true, className: cls.lang }), !isMobile && (_jsxs("span", { children: [t("Welcome"), "\u00A0", userAuth.displayName] })), _jsx(UserDropdown, {})] })) : (_jsxs(RowStack, { gap: "32", children: [_jsx(ThemeSwitcher, {}), _jsx(LanguageSwitcher, { abbreviated: true, className: cls.lang }), _jsx(Button, { variant: "clear", className: cls.links, onClick: onShowModal, children: t("Sign in") })] })), isAuthModal && (_jsx(SignInModal, { isOpen: isAuthModal, onClose: onCloseModal }))] }));
});
export default Navbar;
