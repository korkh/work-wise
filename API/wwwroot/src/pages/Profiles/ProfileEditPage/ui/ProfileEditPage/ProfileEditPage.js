import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./ProfileEditPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
const ProfileEditPage = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (_jsx("div", { className: classNames(cls.profileEditPage, [className], {}), children: t("ProfileEditPage") }));
};
export default memo(ProfileEditPage);
