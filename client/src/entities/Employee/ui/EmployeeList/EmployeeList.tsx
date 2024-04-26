import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./EmployeeList.module.scss";
import { useTranslation } from "react-i18next";
import { HTMLAttributeAnchorTarget, memo } from "react";
import { Employee } from "../../model/types/Employee";
import { EmployeeView } from "../../model/consts/employee_consts";

interface EmployeeListProps {
	className?: string;
	employees: Employee[];
	isLoading: boolean;
	target?: HTMLAttributeAnchorTarget;
	view?: EmployeeView;
}

export const EmployeeList = memo(function EmployeeList(
	props: EmployeeListProps
) {
	const { className } = props;
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.employeeList, [className], {})}>
			{t("EmployeeList")}
		</div>
	);
});
