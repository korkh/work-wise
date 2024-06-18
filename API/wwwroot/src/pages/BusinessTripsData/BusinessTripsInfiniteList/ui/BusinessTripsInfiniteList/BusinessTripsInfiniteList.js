import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useEffect, useState } from "react";
import BusinessTripsList from '../../../BusinessTripsList/ui/BusinessTripsList/BusinessTripsList';
import { useSelector } from "react-redux";
import { selectAllBusinessTrips } from '../../../model/slices/businessTripPageSlice';
import { getBusinessTripPageError, getBusinessTripPageIsLoading, } from '../../../model/selectors/businessTripPageSelectors';
import { TextHolder } from "@/shared/ui/TextHolder";
import { getRouteBusinessTripsSummaries } from "@/shared/consts/routerConsts";
import { BusinessTripsSummariesList } from '../../../BusinessTripsSummariesList';
const BusinessTripsInfiniteList = (props) => {
    const { className, variant } = props;
    const { t } = useTranslation("businessTrip");
    const bTrips = useSelector(selectAllBusinessTrips);
    const isLoading = useSelector(getBusinessTripPageIsLoading);
    const error = useSelector(getBusinessTripPageError);
    const [bTripsLoaded, setBTripsLoaded] = useState(false);
    useEffect(() => {
        if (bTrips && bTrips.length > 0) {
            setBTripsLoaded(true);
        }
    }, [bTrips]);
    if (error || !bTripsLoaded) {
        return _jsx(TextHolder, { size: "l", title: t("No business trip data found") });
    }
    return variant === getRouteBusinessTripsSummaries() ? (_jsx(BusinessTripsSummariesList, { "data-testid": "BusinessTripsSummariesList", isLoading: isLoading, className: classNames("", [className], {}), businessTrips: bTrips })) : (_jsx(BusinessTripsList, { "data-testid": "BusinessTripsList", isLoading: isLoading, className: classNames("", [className], {}), businessTrips: bTrips }));
};
export default memo(BusinessTripsInfiniteList);
