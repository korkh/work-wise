import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./ManagerPanelPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
const ManagerPanelPage = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (_jsx("div", { className: classNames(cls.managerPanelPage, [className], {}), children: t("ManagerPanelPage") }));
};
export default memo(ManagerPanelPage);
