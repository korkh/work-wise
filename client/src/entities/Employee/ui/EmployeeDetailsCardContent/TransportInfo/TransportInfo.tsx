import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Input } from "@/shared/ui/Input";
import { RowStack, ColumnStack } from "@/shared/ui/Stack";
import { TextHolder } from "@/shared/ui/TextHolder";
import { EmployeeDetailsCardProps } from "../../EmployeeDetailsCard/EmployeeDetailsCard";

export const TransportInfo = memo(function TransportInfo(
	props: EmployeeDetailsCardProps
) {
	const {
		data,
		readonly,
		onChangeDrivingLicenseNumber,
		onChangeE100CardNumber,
		onChangeExpectedKmPerDay,
	} = props;
	const { t } = useTranslation();
	return (
		<RowStack gap="24" max>
			<ColumnStack gap="16" max>
				<TextHolder title={"Transport information"} />
				<Input
					size="s"
					width="85%"
					justify="between"
					value={data?.transportInfo?.drivingLicenseNumber}
					label={t("Driving license")}
					onChange={onChangeDrivingLicenseNumber}
					readonly={readonly}
					data-testid="EmployeeDetailsCard.drivingLicenseNumber"
				/>
				<Input
					size="s"
					width="85%"
					justify="between"
					value={data?.transportInfo?.e_100_CardNumber}
					label={t("e100 Card Number")}
					onChange={onChangeE100CardNumber}
					readonly={readonly}
					data-testid="EmployeeDetailsCard.e100CardNumber"
				/>
				<Input
					size="s"
					value={data?.transportInfo?.cars
						.map((car) => car.manufacturer + " " + car.model)
						.toString()}
					label={t("Cars")}
					onChange={() => {}}
					readonly={readonly}
					data-testid="EmployeeDetailsCard.cars"
				/>
				<Input
					size="s"
					width="90%"
					justify="between"
					value={data?.transportInfo?.expectedKmPerDay}
					label={t("Km per day")}
					onChange={onChangeExpectedKmPerDay}
					readonly={readonly}
					data-testid="EmployeeDetailsCard.expectedKmPerDay"
				/>
			</ColumnStack>
		</RowStack>
	);
});
