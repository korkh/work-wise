import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import { memo, useEffect, useState } from "react";
import { GenericTable } from "@/shared/ui/Table";
import { ExportToExcel } from "@/features/ExportToExcel";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchBusinessTripsList } from "../../../model/services/fetchBusinessTripsList";
import { getSummarizedBusinessTrips } from "../../model/selectors/getSummariezedBusinessTrips";
import { TableLoader } from "@/shared/ui/Table/ui/TableLoader";
const BusinessTripsSummariesList = (props) => {
    const { isLoading, businessTrips } = props;
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
        return _jsx(TableLoader, {});
    }
    return (_jsx(_Fragment, { children: _jsx(GenericTable, { title: t("Business Trips Summaries"), columns: tableColumns, data: summarizedData, editable: false, children: _jsx(ExportToExcel, { data: summarizedData, isLoading: isLoading, fileName: "Business trips summaries" }) }) }));
};
export default memo(BusinessTripsSummariesList);
