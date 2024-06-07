import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./ExportToExcel.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { exportToExcel } from "@/shared/lib/utils/exportToExcel/exportToExcel";
import { Button } from "@/shared/ui/Button";
import { Loader } from "@/shared/ui/Loader";

export interface ExportToExcelProps<T extends object> {
	className?: string;
	data: T[];
	fileName: string;
	department?: string;
	isLoading?: boolean;
}

export const ExportToExcel = memo(function ExportToExcel<T extends object>(
	props: ExportToExcelProps<T>
) {
	const { className, data, fileName, isLoading, department } = props;

	const { t } = useTranslation("translation");

	const handleExport = () => {
		exportToExcel<T>({
			data: data,
			fileName: fileName,
			department: department ?? "work wise office LT",
		});
	};

	if (isLoading) {
		return <Loader />;
	}

	if (!data.length) {
		return <div>{t("No data available to export")}</div>;
	}

	return (
		<Button
			className={classNames(cls.exportToExcel, [className], {})}
			onClick={handleExport}
		>
			{t("Export")}
		</Button>
	);
});
