import { useTranslation } from "react-i18next";
import { memo } from "react";
import { EmployeeDetailsCardProps } from "../../EmployeeDetailsCard/EmployeeDetailsCard";
import { DateInput } from "@/shared/ui/DateInput";
import { Input } from "@/shared/ui/Input";
import { ColumnStack, RowStack } from "@/shared/ui/Stack";
import { TextHolder } from "@/shared/ui/TextHolder";

export const ContractDetails = memo(function ContractDetails(
	props: EmployeeDetailsCardProps
) {
	const {
		data,
		readonly,
		onChangePosition,
		onChangeContractNumber,
		onChangeAcceptionDate,
		onChangeDismissalDate,
		onChangeeAnnualHolidays,
		onChangeFatherHolidays,
		onChangeEmployementDays,
		onChangeUnpaidHolidays,
		onChangeTruancyDays,
		onChangeAllowedAbsenceDays,
		onChangeUnusedHolidays,
	} = props;
	const { t } = useTranslation();
	return (
		<RowStack max gap="24">
			<ColumnStack gap="16" max>
				<TextHolder title={"Contract details"} />
				<Input
					size="s"
					value={data?.contractData?.position}
					label={t("Capacity")}
					onChange={onChangePosition}
					readonly={readonly}
					data-testid="EmployeeDetailsCard.position"
				/>
				<Input
					size="s"
					width="70%"
					justify="between"
					value={data?.contractData?.contractNumber}
					label={t("Contract number")}
					onChange={onChangeContractNumber}
					readonly={readonly}
					data-testid="EmployeeDetailsCard.contractNumber"
				/>
				<DateInput
					gap="8"
					width="70%"
					justify="between"
					selected={data?.contractData?.acceptionDate}
					onChange={onChangeAcceptionDate || ((_, _event) => {})}
					label={t("Accepted on")}
					readonly={readonly}
					data-testid="EmployeeDetailsCard.acceptionDate"
				/>
				<DateInput
					gap="8"
					width="70%"
					justify="between"
					selected={data?.contractData?.dismissalDate}
					onChange={onChangeDismissalDate || ((_, _event) => {})}
					label={t("Dismissal date")}
					readonly={readonly}
					data-testid="EmployeeDetailsCard.dismissalDate"
				/>
				<Input
					size="s"
					width="70%"
					justify="between"
					value={data?.contractData?.annualHolidays}
					label={t("Annual holidays")}
					onChange={onChangeeAnnualHolidays}
					readonly={readonly}
					data-testid="EmployeeDetailsCard.annualHolidays"
				/>
				<Input
					size="s"
					width="70%"
					justify="between"
					value={data?.contractData?.fatherHolidays?.toString()}
					label={t("Father holidays")}
					onChange={onChangeFatherHolidays}
					readonly={readonly}
					data-testid="EmployeeDetailsCard.fatherHolidays"
				/>
			</ColumnStack>
			<ColumnStack gap="16" max>
				<Input
					size="s"
					type="number"
					width="70%"
					justify="between"
					value={data?.contractData?.employmentDays?.toString()}
					label={t("Employment days")}
					onChange={onChangeEmployementDays}
					readonly={true}
					data-testid="EmployeeDetailsCard.employmentDays"
				/>
				<Input
					size="s"
					width="70%"
					justify="between"
					value={data?.contractData?.unpaidHolidays}
					label={t("Unpaid holidays")}
					onChange={onChangeUnpaidHolidays}
					readonly={readonly}
					data-testid="EmployeeDetailsCard.unpaidHolidays"
				/>
				<Input
					size="s"
					width="70%"
					justify="between"
					value={data?.contractData?.truancyDays}
					label={t("Truancy days")}
					onChange={onChangeTruancyDays}
					readonly={readonly}
					data-testid="EmployeeDetailsCard.truancyDays"
				/>
				<Input
					size="s"
					width="70%"
					justify="between"
					value={data?.contractData?.allowedAbsenceDays}
					label={t("Allowed absence days")}
					onChange={onChangeAllowedAbsenceDays}
					readonly={readonly}
					data-testid="EmployeeDetailsCard.allowedAbsenceDays"
				/>
				<Input
					size="s"
					width="70%"
					justify="between"
					value={data?.contractData?.unusedHolidays}
					label={t("Unused holidays")}
					onChange={onChangeUnusedHolidays}
					readonly={true}
					data-testid="EmployeeDetailsCard.unusedHolidays"
				/>
			</ColumnStack>
		</RowStack>
	);
});
