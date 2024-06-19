import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Column } from "@/shared/types/ui_components";
import { GenericTable } from "@/shared/ui/Table";
import { ExportToExcel } from "@/features/ExportToExcel";
import { getRoutePayrollDetails } from "@/shared/consts/routerConsts";
import { Payroll } from "@/entities/Payroll";
import { getPayrollColumns } from "../../consts/payrollColumns";

interface PayrollsListProps {
	className?: string;
	payrolls: Payroll[];
	isLoading: boolean;
}

export const PayrollList = memo(function DocumentsList(
	props: PayrollsListProps
) {
	const { payrolls, isLoading } = props;
	const { t } = useTranslation("payrolls");

	const tableColumns: Column<Payroll>[] = getPayrollColumns();

	return (
		<>
			<GenericTable<Payroll>
				title={t("List of payrolls")}
				columns={tableColumns}
				data={payrolls}
				redirect={getRoutePayrollDetails}
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
