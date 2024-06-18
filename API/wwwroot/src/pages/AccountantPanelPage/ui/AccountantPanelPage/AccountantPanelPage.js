import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./AccountantPanelPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useState } from "react";
import { TextHolder } from "@/shared/ui/TextHolder";
import { XmlReader } from "@/features/XmlReader";
import { ColumnStack, RowStack } from "@/shared/ui/Stack";
import { GenericTable } from "@/shared/ui/Table";
import { ntryColumns } from "../../consts/ntryColumns";
import { ExportToExcel } from "@/features/ExportToExcel";
const AccountantPanelPage = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const [data, setData] = useState([]);
    const handleDataParsed = (parsedData) => {
        setData(parsedData);
    };
    return (_jsx(RowStack, { max: true, justify: "center", children: _jsxs(ColumnStack, { gap: "32", className: classNames(cls.accountantPanelPage, [className], {}), children: [_jsx(XmlReader, { onDataParsed: handleDataParsed }), data.length > 0 && (_jsx(GenericTable, { title: "List of XML Entries", columns: ntryColumns, data: data, verticalHeaders: true, children: _jsx(ExportToExcel, { data: data, fileName: "Employees" }) })), _jsx(TextHolder, { variant: "error", size: "m", text: t("Acceess granted only for accountants! Welcome!"), className: cls.welcome })] }) }));
};
export default memo(AccountantPanelPage);
