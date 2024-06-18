import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useEffect, useState } from "react";
import { Loader } from "@/shared/ui/Loader";
import { TextHolder } from "@/shared/ui/TextHolder";
import { GenericTable } from "@/shared/ui/Table";
import { ExportToExcel } from "@/features/ExportToExcel";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { updateBusinessTripData } from '@/entities/BusinessTrip';
import { getBusinessTripsColumns } from '../../../model/consts/getBusinessTripsColumns';
import { fetchBusinessTripsList } from '../../../model/services/fetchBusinessTripsList';
import { useForceUpdate } from "@/shared/lib/forceUpdateRender/foreceUpdateRender";
const BusinessTripsList = (props) => {
    const { className, isLoading, businessTrips } = props;
    const { t } = useTranslation("businessTrip");
    const [updatedBusinessTrips, setUpdatedBusinessTrips] = useState(businessTrips);
    const dispatch = useAppDispatch();
    const forceUpdate = useForceUpdate();
    const tableColumns = getBusinessTripsColumns();
    useEffect(() => {
        setUpdatedBusinessTrips(businessTrips);
    }, [businessTrips]);
    const handleUpdateRow = async (updatedData) => {
        try {
            const updatePromises = updatedData.map((updatedRow) => dispatch(updateBusinessTripData(updatedRow)).unwrap());
            await Promise.all(updatePromises);
            dispatch(fetchBusinessTripsList({ replace: true }));
            forceUpdate();
        }
        catch (error) {
            console.error("Failed to update business trip data!", error);
        }
    };
    if (isLoading) {
        return _jsx(Loader, {});
    }
    if (!isLoading && !updatedBusinessTrips.length) {
        return (_jsx("div", { className: classNames("", [className], {}), children: _jsx(TextHolder, { size: "l", title: t("No business trip data found") }) }));
    }
    return (_jsx(_Fragment, { children: _jsx(GenericTable, { title: t("List of business trips"), columns: tableColumns, data: updatedBusinessTrips, onDataChange: handleUpdateRow, editable: true, children: _jsx(ExportToExcel, { data: updatedBusinessTrips, isLoading: isLoading, fileName: "Business trips" }) }) }));
};
export default memo(BusinessTripsList);
