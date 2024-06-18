import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./AdminPanelPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
const AdminPanelPage = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (_jsx("div", { className: classNames(cls.adminPanelPage, [className], {}), children: t("AdminPanelPage") }));
};
export default memo(AdminPanelPage);
