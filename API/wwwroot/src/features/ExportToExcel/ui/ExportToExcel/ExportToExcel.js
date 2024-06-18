import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./ExportToExcel.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { exportToExcel } from "@/shared/lib/utils/exportToExcel/exportToExcel";
import { Button } from "@/shared/ui/Button";
import { Loader } from "@/shared/ui/Loader";
export const ExportToExcel = memo(function ExportToExcel(props) {
    const { className, data, fileName, isLoading, department } = props;
    const { t } = useTranslation("translation");
    const handleExport = () => {
        exportToExcel({
            data: data,
            fileName: fileName,
            department: department ?? "work wise office LT",
        });
    };
    if (isLoading) {
        return _jsx(Loader, {});
    }
    if (!data.length) {
        return _jsx("div", { children: t("No data available to export") });
    }
    return (_jsx(Button, { className: classNames(cls.exportToExcel, [className], {}), onClick: handleExport, children: t("Export") }));
});
