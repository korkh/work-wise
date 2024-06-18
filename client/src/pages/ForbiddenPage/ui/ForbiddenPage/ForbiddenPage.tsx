import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./ForbiddenPage.module.scss";
import { useTranslation } from "react-i18next";
import { PageContainer } from "@/widgets/PageContainer";
import Padlock from "@/shared/assets/icons/padlock-icon.webp";
import { AppImage } from "@/shared/ui/AppImage";
import { TextHolder } from "@/shared/ui/TextHolder";
import { ColumnStack } from "@/shared/ui/Stack";
import { Button } from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";
import { getRouteMain } from "@/shared/consts/routerConsts";

interface ForbiddenPageProps {
	className?: string;
}

export const ForbiddenPage = (props: ForbiddenPageProps) => {
	const { className } = props;
	const { t } = useTranslation("translation");
	const navigate = useNavigate();
	const handleBack = () => {
		navigate(getRouteMain());
	};
	return (
		<PageContainer className={classNames(cls.forbiddenPage, [className], {})}>
			<ColumnStack gap="8" justify="center" align="center">
				<TextHolder variant="error" size="l" title={t("403 FORBIDDEN")} />
				<AppImage
					className={classNames(cls.padlock, [className], {})}
					src={Padlock}
					width={500}
				/>
				<TextHolder title={t("Oops! You've hit a wall.")} />
				<TextHolder
					text={t("You don’t have permission to access this area.\n")}
				/>

				<TextHolder
					text={t("If you think this is a	mistake, please contact support.")}
				/>
				<Button className={cls.btnBack} variant="filled" onClick={handleBack}>
					{t("Back to main page")}
				</Button>
			</ColumnStack>
		</PageContainer>
	);
};
