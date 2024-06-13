import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useEffect, useState } from "react";
import BusinessTripsList from "@/pages/BusinessTripsData/BusinessTripsList/ui/BusinessTripsList/BusinessTripsList";
import { useSelector } from "react-redux";
import { selectAllBusinessTrips } from "@/pages/BusinessTripsData/model/slices/businessTripPageSlice";
import {
	getBusinessTripPageError,
	getBusinessTripPageIsLoading,
} from "@/pages/BusinessTripsData/model/selectors/businessTripPageSelectors";
import { TextHolder } from "@/shared/ui/TextHolder";

interface BusinessTripsInfiniteListProps {
	className?: string;
}

const BusinessTripsInfiniteList = (props: BusinessTripsInfiniteListProps) => {
	const { className } = props;
	const { t } = useTranslation("businessTrip");

	const bTrips = useSelector(selectAllBusinessTrips);
	console.log("TRIPS IN INFINITE LSIT", bTrips);
	const isLoading = useSelector(getBusinessTripPageIsLoading);
	const error = useSelector(getBusinessTripPageError);

	const [bTripsLoaded, setBTripsLoaded] = useState(false);

	useEffect(() => {
		if (bTrips && bTrips.length > 0) {
			setBTripsLoaded(true);
		}
	}, [bTrips]);

	if (error || !bTripsLoaded) {
		return <TextHolder size={"l"} title={t("No business trip data found")} />;
	}

	return (
		<BusinessTripsList
			data-testid="EmployeeList"
			isLoading={isLoading}
			className={classNames("", [className], {})}
			businessTrips={bTrips}
		/>
	);
};

export default memo(BusinessTripsInfiniteList);
