import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./EmployeeList.module.scss";
import { useTranslation } from "react-i18next";
import { TextHolder } from "@/shared/ui/TextHolder";
import { memo } from "react";
import { GenericTable } from "@/shared/ui/Table";
import { formatDate } from "@/shared/lib/utils/table/formatDate/formatDate";
import { booleanToYesNo } from "@/shared/lib/utils/table/booleanConverter/booleanConverter";
import { ExportToExcel } from "../../../features/ExportToExcel";
import { getRouteEmployeeDetails } from "@/shared/consts/routerConsts";
import { Loader } from "@/shared/ui/Loader";
export const EmployeeList = memo(function EmployeeList(props) {
    const { className, employees, isLoading } = props;
    const { t } = useTranslation("employees");
    const tableColumns = [
        { key: "id", header: "No." },
        { key: "avatar", header: t("Photo") },
        { key: "firstName", header: t("First Name") },
        { key: "lastName", header: t("Last Name") },
        {
            key: "birthDay",
            header: t("Birthday"),
            render: (value) => formatDate(value),
        },
        { key: "contractData", header: t("Capacity"), nestedKeys: ["position"] },
        {
            key: "registrationAddress",
            header: t("Location"),
            nestedKeys: ["city"],
        },
        { key: "phoneNumber", header: t("Phone Number") },
        { key: "email", header: "Email" },
        {
            key: "isAvailable",
            header: t("Available"),
            render: (value) => booleanToYesNo(value),
        },
    ];
    if (isLoading) {
        return _jsx(Loader, {});
    }
    if (!isLoading && !employees.length) {
        return (_jsx("div", { className: classNames(cls.employeeList, [className], {}), children: _jsx(TextHolder, { size: "l", title: t("Employees not found") }) }));
    }
    return (_jsx(_Fragment, { children: _jsx(GenericTable, { title: t("List of employees"), columns: tableColumns, data: employees, redirect: getRouteEmployeeDetails, children: _jsx(ExportToExcel, { data: employees, isLoading: isLoading, fileName: "Employees" }) }) }));
});
