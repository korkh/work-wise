import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./PayrollEditPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
const PayrollEditPage = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (_jsx("div", { className: classNames(cls.payrollEditPage, [className], {}), children: t("PayrollEditPage") }));
};
export default memo(PayrollEditPage);
