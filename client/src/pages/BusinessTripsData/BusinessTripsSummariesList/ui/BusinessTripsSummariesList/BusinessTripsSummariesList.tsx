import { useTranslation } from "react-i18next";
import { memo, useEffect, useState } from "react";
import { BusinessTrip } from "@/entities/BusinessTrip";
import { Column } from "@/shared/types/ui_components";
import { GenericTable } from "@/shared/ui/Table";
import { ExportToExcel } from "@/features/ExportToExcel";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchBusinessTripsList } from "../../../model/services/fetchBusinessTripsList";
import { BusinessTripSummary } from "../../model/types/businessTripsSummaries";
import { getSummarizedBusinessTrips } from "../../model/selectors/getSummariezedBusinessTrips";
import { TableLoader } from "@/shared/ui/Table/ui/TableLoader";

interface BusinessTripsSummariesListProps {
	businessTrips: BusinessTrip[];
	isLoading: boolean;
}

const BusinessTripsSummariesList = (props: BusinessTripsSummariesListProps) => {
	const { isLoading, businessTrips } = props;
	const { t } = useTranslation("businessTrip");
	const [summarizedData, setSummarizedData] = useState<BusinessTripSummary[]>(
		[]
	);

	const dispatch = useAppDispatch();

	const tableColumns: Column<BusinessTripSummary>[] = [
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
		return <TableLoader />;
	}

	return (
		<>
			<GenericTable<BusinessTripSummary>
				title={t("Business Trips Summaries")}
				columns={tableColumns}
				data={summarizedData}
				editable={false}
			>
				<ExportToExcel
					data={summarizedData}
					isLoading={isLoading}
					fileName="Business trips summaries"
				/>
			</GenericTable>
		</>
	);
};

export default memo(BusinessTripsSummariesList);
