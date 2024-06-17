import { BusinessTrip } from "@/entities/BusinessTrip";
import { formatDate } from "@/shared/lib/utils/table/formatDate/formatDate";
import { Column } from "@/shared/types/ui_components";
import { useTranslation } from "react-i18next";

export const getBusinessTripsColumns = (): Column<BusinessTrip>[] => {
	const { t } = useTranslation("businessTrip");
	return [
		{ key: "id", header: "No.", notEditable: true },
		{
			key: "employee",
			nestedKeys: ["avatar"],
			header: t("Photo"),
			uniqueId: "avatar",
			notEditable: true,
		},
		{
			key: "employee",
			nestedKeys: ["lastName"],
			header: t("Lastname"),
			notEditable: true,
		},
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
};
