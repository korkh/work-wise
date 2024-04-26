import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./ProfilePage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
	const { className } = props;
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.profilePage, [className], {})}>
			{t("ProfilePage")}
		</div>
	);
};

export default memo(ProfilePage);
