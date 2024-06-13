import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { BusinessTrip } from "@/entities/BusinessTrip";
import { Column } from "@/shared/types/ui_components";
import { formatDate } from "@/shared/lib/utils/table/formatDate/formatDate";
import { Loader } from "@/shared/ui/Loader";
import { TextHolder } from "@/shared/ui/TextHolder";
import { GenericTable } from "@/shared/ui/Table";
import { ExportToExcel } from "@/features/ExportToExcel";
import { getRouteBusinessTripDetails } from "@/shared/consts/routerConsts";
import { toast } from "react-toastify";

interface BusinessTripsListProps {
	className?: string;
	businessTrips: BusinessTrip[];
	isLoading: boolean;
}

const BusinessTripsList = (props: BusinessTripsListProps) => {
	const { className, isLoading, businessTrips } = props;
	const { t } = useTranslation("businessTrip");

	const tableColumns: Column<BusinessTrip>[] = [
		{ key: "id", header: "No." },
		{
			key: "employee",
			nestedKeys: ["avatar"],
			header: t("Photo"),
			uniqueId: "avatar",
		},
		{ key: "employee", nestedKeys: ["lastName"], header: t("Lastname") },
		{
			key: "laikotarpis",
			header: t("Date"),
			render: (value) => formatDate(value as string),
		},
		{
			key: "alga",
			header: t("Salary"),
		},
		{
			key: "dienpinigai",
			header: t("Daily allowance"),
		},
		{
			key: "bankas",
			header: t("Bank"),
		},
		{
			key: "baudos",
			header: t("Fines"),
		},
		{
			key: "likutis",
			header: t("Balance"),
		},
	];

	if (isLoading) {
		return <Loader />;
	}

	if (!isLoading && !businessTrips.length) {
		return (
			<div className={classNames("", [className], {})}>
				<TextHolder size={"l"} title={t("No business trip data found")} />
			</div>
		);
	}

	return (
		<>
			<GenericTable<BusinessTrip>
				title={t("List of business trips")}
				columns={tableColumns}
				data={businessTrips}
				redirect={getRouteBusinessTripDetails}
			>
				<ExportToExcel
					data={businessTrips}
					isLoading={isLoading}
					fileName="Business trips"
				/>
			</GenericTable>
		</>
	);
};

export default memo(BusinessTripsList);
