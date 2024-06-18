import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./PayrollList.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { TextHolder } from "@/shared/ui/TextHolder";
import { GenericTable } from "@/shared/ui/Table";
import { ExportToExcel } from "@/features/ExportToExcel";
import { getRoutePayrollDetails } from "@/shared/consts/routerConsts";
import { Loader } from "@/shared/ui/Loader";
import { getPayrollColumns } from "../../consts/payrollColumns";
export const PayrollList = memo(function DocumentsList(props) {
    const { className, payrolls, isLoading } = props;
    const { t } = useTranslation("payrolls");
    const tableColumns = getPayrollColumns();
    if (isLoading) {
        return _jsx(Loader, {});
    }
    if (!isLoading && !payrolls.length) {
        return (_jsx("div", { className: classNames(cls.payrollList, [className]), children: _jsx(TextHolder, { size: "l", title: t("Payrolls not found") }) }));
    }
    return (_jsx(_Fragment, { children: _jsx(GenericTable, { title: t("List of payrolls"), columns: tableColumns, data: payrolls, redirect: getRoutePayrollDetails, verticalHeaders: true, children: _jsx(ExportToExcel, { data: payrolls, isLoading: isLoading, fileName: "Payrolls" }) }) }));
});
