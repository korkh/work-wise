import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import cls from "./UserDropdown.module.scss";
import { getUserAuthData, userActions } from "@/entities/User";
import { getRouteAccountant, getRouteAdmin, getRouteMain, getRouteManager, getRouteProfile, getRouteSettings, } from "@/shared/consts/routerConsts";
import { Dropdown } from "@/shared/ui/Popups/ui/Dropdown";
import { Avatar } from "@/shared/ui/Avatar";
import { stopRefreshTokenTimer } from "@/shared/lib/utils/url/refreshTokenTimer/refreshTokenTimer";
import { useNavigate } from "react-router-dom";
import { useAuthToken } from "@/shared/lib/hooks/useAuthToken/useAuthToken";
export const UserDropdown = memo(function UserDropdown(props) {
    const { className } = props;
    const { t } = useTranslation("translation");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useAuthToken();
    const authData = useSelector(getUserAuthData);
    const onLogout = useCallback(() => {
        stopRefreshTokenTimer();
        dispatch(userActions.signOut());
        navigate(getRouteMain());
    }, [dispatch, navigate]);
    if (!authData) {
        return null;
    }
    const items = [
        ...(userData && userData.role?.includes("Admin")
            ? [{ content: t("Admin panel"), href: getRouteAdmin() }]
            : []),
        ...(userData && userData.role?.includes("Manager")
            ? [{ content: t("Manager panel"), href: getRouteManager() }]
            : []),
        ...(userData && userData.role?.includes("Accountant")
            ? [{ content: t("Accountant panel"), href: getRouteAccountant() }]
            : []),
        {
            content: t("Profile"),
            href: getRouteProfile(authData.id),
        },
        {
            content: t("Settings"),
            href: getRouteSettings(),
        },
        {
            content: t("Sign out"),
            onClick: onLogout,
        },
    ];
    return (_jsx(Dropdown, { direction: "bottom left", className: classNames(cls.dropdown, [className], {}), items: items, trigger: _jsx(Avatar, { size: 40, src: authData.image }) }));
});
