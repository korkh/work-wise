import { useTranslation } from "react-i18next";
import { RowStack } from "@/shared/ui/Stack";
import { TextHolder } from "@/shared/ui/TextHolder";

export const EmployeeDetailsError = () => {
	const { t } = useTranslation();

	return (
		<RowStack justify="center" max>
			<TextHolder
				variant="error"
				title={t("Profile loading error")}
				text={t("Try to refresh your page")}
				align="center"
			/>
		</RowStack>
	);
};
