import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./ProfilePage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
const ProfilePage = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (_jsx("div", { className: classNames(cls.profilePage, [className], {}), children: t("ProfilePage") }));
};
export default memo(ProfilePage);
