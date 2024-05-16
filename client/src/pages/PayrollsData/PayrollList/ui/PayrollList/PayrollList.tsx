import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./PayrollList.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Column } from "@/shared/types/ui_components";
import { TextHolder } from "@/shared/ui/TextHolder";
import { GenericTable } from "@/shared/ui/Table";
import { ExportToExcel } from "@/features/ExportToExcel";
import { getRouteDocumentDetails } from "@/shared/consts/routerConsts";
import { Payroll } from "@/entities/Payroll";
import { PayrollSortField } from "../../../../../pages/PayrollsData";
import { payrollColumns } from "../../consts/payrollColumns";

interface PayrollsListProps {
	className?: string;
	payrolls: Payroll[];
	isLoading: boolean;
}

export const PayrollList = memo(function DocumentsList(
	props: PayrollsListProps
) {
	const { className, payrolls, isLoading } = props;
	const { t } = useTranslation();

	const tableColumns: Column<Payroll>[] = payrollColumns;

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!isLoading && !payrolls.length) {
		return (
			<div className={classNames(cls.payrollList, [className], {})}>
				<TextHolder size={"l"} title={t("Payrolls not found")} />
			</div>
		);
	}

	return (
		<>
			<GenericTable<Payroll, PayrollSortField>
				title="List of payrolls"
				columns={tableColumns}
				data={payrolls}
				redirect={getRouteDocumentDetails}
				verticalHeaders
			>
				<ExportToExcel
					data={payrolls}
					isLoading={isLoading}
					fileName="Payrolls"
				/>
			</GenericTable>
		</>
	);
});