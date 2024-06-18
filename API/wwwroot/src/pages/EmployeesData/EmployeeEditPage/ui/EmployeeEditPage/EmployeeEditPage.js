import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./EmployeeEditPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
const EmployeeEditPage = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (_jsx("div", { className: classNames(cls.employeeEditPage, [className], {}), children: t("EmployeeEditPage") }));
};
export default memo(EmployeeEditPage);
