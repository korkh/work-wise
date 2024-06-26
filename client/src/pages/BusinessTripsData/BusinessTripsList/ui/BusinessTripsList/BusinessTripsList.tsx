import { useTranslation } from "react-i18next";
import { memo, useEffect, useState } from "react";
import { BusinessTrip } from "@/entities/BusinessTrip";
import { Column } from "@/shared/types/ui_components";
import { GenericTable } from "@/shared/ui/Table";
import { ExportToExcel } from "@/features/ExportToExcel";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { updateBusinessTripData } from "@/entities/BusinessTrip";
import { getBusinessTripsColumns } from "../../../model/consts/getBusinessTripsColumns";
import { fetchBusinessTripsList } from "../../../model/services/fetchBusinessTripsList";
import { useForceUpdate } from "@/shared/lib/forceUpdateRender/foreceUpdateRender";
import { TableLoader } from "@/shared/ui/Table/ui/TableLoader";

interface BusinessTripsListProps {
	businessTrips: BusinessTrip[];
	isLoading: boolean;
}

const BusinessTripsList = (props: BusinessTripsListProps) => {
	const { isLoading, businessTrips } = props;
	const { t } = useTranslation("businessTrip");
	const [updatedBusinessTrips, setUpdatedBusinessTrips] =
		useState(businessTrips);

	const dispatch = useAppDispatch();
	const forceUpdate = useForceUpdate();

	const tableColumns: Column<BusinessTrip>[] = getBusinessTripsColumns();

	useEffect(() => {
		setUpdatedBusinessTrips(businessTrips);
	}, [businessTrips]);

	const handleUpdateRow = async (updatedData: BusinessTrip[]) => {
		try {
			const updatePromises = updatedData.map((updatedRow) =>
				dispatch(updateBusinessTripData(updatedRow)).unwrap()
			);
			await Promise.all(updatePromises);
			dispatch(fetchBusinessTripsList({ replace: true }));
			forceUpdate();
		} catch (error) {
			console.error("Failed to update business trip data!", error);
		}
	};

	if (isLoading || !updatedBusinessTrips) {
		return <TableLoader />;
	}

	return (
		<>
			<GenericTable<BusinessTrip>
				title={t("List of business trips")}
				columns={tableColumns}
				data={updatedBusinessTrips}
				onDataChange={handleUpdateRow}
				editable
			>
				<ExportToExcel
					data={updatedBusinessTrips}
					isLoading={isLoading}
					fileName="Business trips"
				/>
			</GenericTable>
		</>
	);
};

export default memo(BusinessTripsList);
