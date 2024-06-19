import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./AboutPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { PageContainer } from "@/widgets/PageContainer";
import { TextHolder } from "@/shared/ui/TextHolder";
import { ColumnStack } from "@/shared/ui/Stack";

interface AboutPageProps {
	className?: string;
}

const AboutPage = (props: AboutPageProps) => {
	const { className } = props;
	const { t } = useTranslation("translation");
	return (
		<PageContainer className={classNames(cls.aboutPage, [className], {})}>
			<ColumnStack>
				<TextHolder title={t("Information for testing application:")} />
				<TextHolder text={t("Accountant")} />
				<TextHolder text={t("- Email: zivile@test.com")} />
				<TextHolder text={t("- Password: Pa$$w0rd")} />
				<br />
				<TextHolder text={t("Admin")} />
				<TextHolder text={t("- Email: peter@test.com")} />
				<TextHolder text={t("- Password: Pa$$w0rd")} />
				<br />
				<TextHolder text={t("Manager")} />
				<TextHolder text={t("- Email: evaldas@test.com")} />
				<TextHolder text={t("- Password: Pa$$w0rd")} />
			</ColumnStack>
		</PageContainer>
	);
};

export default memo(AboutPage);
