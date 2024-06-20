import { useTranslation } from "react-i18next";
import { memo } from "react";
import { EmployeeDetailsCardProps } from "../../EmployeeDetailsCard/EmployeeDetailsCard";
import { Input } from "@/shared/ui/Input";
import { RowStack, ColumnStack } from "@/shared/ui/Stack";
import { TextHolder } from "@/shared/ui/TextHolder";

export const RegistrationAddress = memo(function RegistrationAddress(
	props: EmployeeDetailsCardProps
) {
	const {
		data,
		readonly,
		onChangeRegistrationAddress,
		onChangeCity,
		onChangeZip,
		onChangeCountry,
	} = props;
	const { t } = useTranslation("employees");
	return (
		<RowStack gap="24" max>
			<ColumnStack gap="16" max>
				<TextHolder title={t("Registration address")} />
				<Input
					size="s"
					value={data?.registrationAddress?.address1}
					label={t("Address")}
					onChange={onChangeRegistrationAddress}
					readonly={readonly}
					data-testid="EmployeeDetailsCard.address"
				/>
				<Input
					size="s"
					value={data?.registrationAddress?.city}
					label={t("City")}
					onChange={onChangeCity}
					readonly={readonly}
					data-testid="EmployeeDetailsCard.city"
				/>
				<Input
					size="s"
					value={data?.registrationAddress?.zip}
					label={t("ZIP")}
					onChange={onChangeZip}
					readonly={readonly}
					data-testid="EmployeeDetailsCard.zip"
				/>
				<Input
					size="s"
					value={data?.registrationAddress?.country}
					label={t("Country")}
					onChange={onChangeCountry}
					readonly={readonly}
					data-testid="EmployeeDetailsCard.country"
				/>
			</ColumnStack>
		</RowStack>
	);
});
