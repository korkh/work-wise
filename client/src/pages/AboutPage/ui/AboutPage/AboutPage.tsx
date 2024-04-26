import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./AboutPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface AboutPageProps {
	className?: string;
}

const AboutPage = (props: AboutPageProps) => {
	const { className } = props;
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.aboutPage, [className], {})}>
			{t("AboutPage")}
		</div>
	);
};

export default memo(AboutPage);
