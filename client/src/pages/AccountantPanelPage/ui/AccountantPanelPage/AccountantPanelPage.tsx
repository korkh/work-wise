import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./AccountantPanelPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface AccountantPanelPageProps {
	className?: string;
}

const AccountantPanelPage = (props: AccountantPanelPageProps) => {
	const { className } = props;
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.accountantPanelPage, [className], {})}>
			{t("AccountantPanelPage")}
		</div>
	);
};

export default memo(AccountantPanelPage);
