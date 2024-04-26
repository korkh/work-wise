import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./MainPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { PageContainer } from "@/widgets/PageContainer";

interface MainPageProps {
	className?: string;
}

const MainPage = (props: MainPageProps) => {
	const { className } = props;
	const { t } = useTranslation();

	return (
		<PageContainer className={classNames(cls.mainPage, [className], {})}>
			{t("Main Page")}
		</PageContainer>
	);
};

export default memo(MainPage);
