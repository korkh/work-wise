import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./SettingsPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
const SettingsPage = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (_jsx("div", { className: classNames(cls.settingsPage, [className], {}), children: t("SettingsPage") }));
};
export default memo(SettingsPage);
