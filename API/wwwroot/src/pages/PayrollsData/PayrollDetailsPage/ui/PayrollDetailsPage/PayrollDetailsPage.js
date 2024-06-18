import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./PayrollDetailsPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
const PayrollDetailsPage = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (_jsx("div", { className: classNames(cls.payrollDetailsPage, [className], {}), children: t("PayrollDetailsPage") }));
};
export default memo(PayrollDetailsPage);
