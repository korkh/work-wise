import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useEffect, useState } from "react";
import { Loader } from "@/shared/ui/Loader";
import { TextHolder } from "@/shared/ui/TextHolder";
import { GenericTable } from "@/shared/ui/Table";
import { ExportToExcel } from "@/features/ExportToExcel";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchBusinessTripsList } from '../../../model/services/fetchBusinessTripsList';
import { getSummarizedBusinessTrips } from "../../model/selectors/getSummariezedBusinessTrips";
const BusinessTripsSummariesList = (props) => {
    const { className, isLoading, businessTrips } = props;
    const { t } = useTranslation("businessTrip");
    const [summarizedData, setSummarizedData] = useState([]);
    const dispatch = useAppDispatch();
    const tableColumns = [
        { key: "id", header: "No.", notEditable: true },
        {
            key: "avatar",
            header: t("Photo"),
            notEditable: true,
        },
        { key: "employeeName", header: t("Employee") },
        { key: "year", header: t("Year") },
        { key: "totalAlga", header: t("Total salary") },
        { key: "totalDienpinigai", header: t("Total daily allowance") },
        { key: "totalBankas", header: t("Total Bank") },
        { key: "totalBaudos", header: t("Total Fines") },
        { key: "totalLikutis", header: t("Total balance") },
    ];
    useEffect(() => {
        setSummarizedData(getSummarizedBusinessTrips(businessTrips));
    }, [businessTrips]);
    useEffect(() => {
        dispatch(fetchBusinessTripsList({ replace: true }));
    }, [dispatch]);
    if (isLoading) {
        return _jsx(Loader, {});
    }
    if (!isLoading && !summarizedData.length) {
        return (_jsx("div", { className: classNames("", [className], {}), children: _jsx(TextHolder, { size: "l", title: t("No business trip summaries found") }) }));
    }
    return (_jsx(_Fragment, { children: _jsx(GenericTable, { title: t("Business Trips Summaries"), columns: tableColumns, data: summarizedData, editable: false, children: _jsx(ExportToExcel, { data: summarizedData, isLoading: isLoading, fileName: "Business trips summaries" }) }) }));
};
export default memo(BusinessTripsSummariesList);
