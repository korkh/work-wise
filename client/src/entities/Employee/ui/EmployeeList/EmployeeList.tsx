import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./EmployeeList.module.scss";
import { useTranslation } from "react-i18next";
import { Employee } from "../../model/types/Employee";
import { EmployeeView } from "../../model/consts/employee_consts";
import { TextHolder } from "@/shared/ui/TextHolder";
import { memo } from "react";
import { GenericTable } from "@/shared/ui/GenericTable";

interface EmployeeListProps {
	className?: string;
	employees: Employee[];
	isLoading: boolean;
	view?: EmployeeView;
}

export const EmployeeList = memo(function EmployeeList(
	props: EmployeeListProps
) {
	const { className, employees, isLoading } = props;
	const { t } = useTranslation();

	if (!isLoading && !employees.length) {
		return (
			<div className={classNames(cls.ArticleList, [className], {})}>
				<TextHolder size={"l"} title={t("Articles not found")} />
			</div>
		);
	}

	return <GenericTable columns={} data={employees}></GenericTable>;
});
