import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { GenericTable } from "@/shared/ui/Table";
import { ExportToExcel } from "@/features/ExportToExcel";
import { getRoutePayrollDetails } from "@/shared/consts/routerConsts";
import { getPayrollColumns } from "../../consts/payrollColumns";
export const PayrollList = memo(function DocumentsList(props) {
    const { payrolls, isLoading } = props;
    const { t } = useTranslation("payrolls");
    const tableColumns = getPayrollColumns();
    return (_jsx(_Fragment, { children: _jsx(GenericTable, { title: t("List of payrolls"), columns: tableColumns, data: payrolls, redirect: getRoutePayrollDetails, verticalHeaders: true, children: _jsx(ExportToExcel, { data: payrolls, isLoading: isLoading, fileName: "Payrolls" }) }) }));
});
