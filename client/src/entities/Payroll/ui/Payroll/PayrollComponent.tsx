import cls from "./PayrollComponent.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { classNames } from "@/shared/lib/utils/classNames/classNames";

interface PayrollProps {
	className?: string;
}

export const PayrollComponent = memo(function PayrollComponent(
	props: PayrollProps
) {
	const { className } = props;
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.payroll, [className], {})}>
			{t("Payroll")}
		</div>
	);
});
