import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./PayrollEditPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface PayrollEditPageProps {
	className?: string;
}

const PayrollEditPage = (props: PayrollEditPageProps) => {
	const { className } = props;
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.payrollEditPage, [className], {})}>
			{t("PayrollEditPage")}
		</div>
	);
};

export default memo(PayrollEditPage);
