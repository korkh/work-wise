import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./EmployeeCreatePage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
const EmployeeCreatePage = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (_jsx("div", { className: classNames(cls.employeeCreatePage, [className], {}), children: t("EmployeeCreatePage") }));
};
export default memo(EmployeeCreatePage);
