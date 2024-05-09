import { useTranslation } from "react-i18next";
import { memo } from "react";
import { EmployeeDetailsCardProps } from "../../EmployeeDetailsCard/EmployeeDetailsCard";
import { DateInput } from "@/shared/ui/DateInput";
import { Input } from "@/shared/ui/Input";
import { ColumnStack, RowStack } from "@/shared/ui/Stack";
import { TextHolder } from "@/shared/ui/TextHolder";

export const PersonalInformation = memo(function PersonalInformation(
	props: EmployeeDetailsCardProps
) {
	const {
		data,
		readonly,
		onChangeFirstname,
		onChangeLastname,
		onChangeBirthday,
		onChangeEmail,
		onChangePhoneNumber,
	} = props;
	const { t } = useTranslation();
	return (
		<RowStack gap="24" max>
			<ColumnStack gap="16" max>
				<TextHolder title={"Personal information"} />
				<Input
					size="s"
					value={data?.firstName}
					label={t("Firstname")}
					onChange={onChangeFirstname}
					readonly={readonly}
					data-testid="EmployeeDetailsCard.firstName"
				/>
				<Input
					size="s"
					value={data?.lastName}
					label={t("Lastname")}
					onChange={onChangeLastname}
					readonly={readonly}
					data-testid="EmployeeDetailsCard.lastName"
				/>
				<DateInput
					selected={data?.birthDay}
					onChange={onChangeBirthday || ((_, _event) => {})}
					label={t("Birthday")}
					readonly={readonly}
					data-testid="EmployeeDetailsCard.birthDay"
				/>
				<Input
					size="s"
					value={data?.email}
					label={t("Email")}
					onChange={onChangeEmail}
					readonly={readonly}
					data-testid="EmployeeDetailsCard.email"
				/>
				<Input
					size="s"
					width="88%"
					justify="between"
					value={data?.phoneNumber}
					label={t("Phone number")}
					onChange={onChangePhoneNumber}
					readonly={readonly}
					data-testid="EmployeeDetailsCard.phoneNumber"
				/>
			</ColumnStack>
		</RowStack>
	);
});
