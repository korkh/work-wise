import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./DocumentsList.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { TextHolder } from "@/shared/ui/TextHolder";
import { GenericTable } from "@/shared/ui/Table";
import { ExportToExcel } from "@/features/ExportToExcel";
import { formatDate } from "@/shared/lib/utils/table/formatDate/formatDate";
import { getRouteDocumentDetails } from "@/shared/consts/routerConsts";
import { Loader } from "@/shared/ui/Loader";
export const DocumentsList = memo(function DocumentsList(props) {
    const { className, documents, isLoading } = props;
    const { t } = useTranslation();
    const tableColumns = [
        { key: "id", header: "No." },
        { key: "employee", nestedKeys: ["lastName"], header: "Lastname" },
        { key: "title", header: "Title" },
        {
            key: "issueDate",
            header: "Issued",
            render: (value) => formatDate(value),
        },
        {
            key: "expirationDate",
            header: "Expire",
            render: (value) => formatDate(value),
        },
    ];
    const getRowClass = (row) => {
        if (row.hasTwoMonthWarning &&
            row.hasThreeMonthWarning &&
            row.hasSixMonthWarning) {
            return cls.redRow;
        }
        else if (row.hasThreeMonthWarning && row.hasSixMonthWarning) {
            return cls.orangeRow;
        }
        else if (row.hasSixMonthWarning) {
            return cls.yellowRow;
        }
        else {
            return "";
        }
    };
    if (isLoading) {
        return _jsx(Loader, {});
    }
    if (!isLoading && !documents.length) {
        return (_jsx("div", { className: classNames(cls.documentsList, [className], {}), children: _jsx(TextHolder, { size: "l", title: t("Documents not found") }) }));
    }
    return (_jsx(_Fragment, { children: _jsx(GenericTable, { title: "List of documents", columns: tableColumns, data: documents, redirect: getRouteDocumentDetails, getRowClass: getRowClass, children: _jsx(ExportToExcel, { data: documents, isLoading: isLoading, fileName: "Documents" }) }) }));
});
