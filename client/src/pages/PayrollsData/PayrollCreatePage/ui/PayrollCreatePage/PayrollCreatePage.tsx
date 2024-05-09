import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./PayrollCreatePage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface PayrollCreatePageProps {
	className?: string;
}

const PayrollCreatePage = (props: PayrollCreatePageProps) => {
	const { className } = props;
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.payrollCreatePage, [className], {})}>
			{t("PayrollCreatePage")}
		</div>
	);
};

export default memo(PayrollCreatePage);
