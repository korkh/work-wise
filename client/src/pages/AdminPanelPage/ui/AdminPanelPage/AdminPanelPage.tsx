import { useTranslation } from "react-i18next";
import { memo } from "react";
import { PageContainer } from "@/widgets/PageContainer";
import { AppLink } from "@/shared/ui/AppLink";
import {
	getRouteDocumentCreate,
	getRouteEmployeeCreate,
} from "@/shared/consts/routerConsts";
import { Button } from "@/shared/ui/Button";
import { ColumnStack } from "@/shared/ui/Stack";

const AdminPanelPage = () => {
	const { t } = useTranslation("translation");
	return (
		<PageContainer>
			<ColumnStack gap="32">
				<AppLink to={getRouteEmployeeCreate()}>
					<Button color="success">{t("Create new employee")}</Button>
				</AppLink>
				<AppLink to={getRouteDocumentCreate()}>
					<Button color="success">{t("Create new document")}</Button>
				</AppLink>
			</ColumnStack>
		</PageContainer>
	);
};

export default memo(AdminPanelPage);
