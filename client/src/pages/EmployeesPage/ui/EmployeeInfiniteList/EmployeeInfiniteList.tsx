import { useTranslation } from "react-i18next";
import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getEmployees } from "../../model/slices/employeesPageSlice";
import {
	getEmployeesPageError,
	getEmployeesPageIsLoading,
} from "../../model/selectors/getEmployeesPageSelectors";
import { TextHolder } from "@/shared/ui/TextHolder";
import { EmployeeList } from "@/entities/Employee";

interface EmployeeInfiniteListProps {
	className?: string;
}

export const EmployeeInfiniteList = memo(function EmployeeInfiniteList(
	props: EmployeeInfiniteListProps
) {
	const { className } = props;
	const { t } = useTranslation();

	const employees = useSelector(getEmployees.selectAll);
	const isLoading = useSelector(getEmployeesPageIsLoading);
	const error = useSelector(getEmployeesPageError);

	const [employeesLoaded, setEmployeesLoaded] = useState(false);

	useEffect(() => {
		if (employees) {
			setEmployeesLoaded(true);
		}
	}, [employees]);

	if (error || !employeesLoaded) {
		return <TextHolder text={t("Employees loading error")} />;
	}

	return (
		<EmployeeList
			data-testid="EmployeeList"
			employees={employees}
			isLoading={isLoading}
			className={className}
		/>
	);
});
