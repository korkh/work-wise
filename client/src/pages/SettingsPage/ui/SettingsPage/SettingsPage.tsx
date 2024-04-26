import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./SettingsPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface SettingsPageProps {
	className?: string;
}

const SettingsPage = (props: SettingsPageProps) => {
	const { className } = props;
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.settingsPage, [className], {})}>
			{t("SettingsPage")}
		</div>
	);
};

export default memo(SettingsPage);
