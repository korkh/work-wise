import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./EmployeeList.module.scss";
import { useTranslation } from "react-i18next";
import { Employee } from "../../../entities/Employee/model/types/Employee";
import { TextHolder } from "@/shared/ui/TextHolder";
import { memo } from "react";
import { GenericTable } from "@/shared/ui/Table";
import { Column } from "@/shared/types/ui_components";
import { formatDate } from "@/shared/lib/utils/table/formatDate/formatDate";
import { booleanToYesNo } from "@/shared/lib/utils/table/booleanConverter/booleanConverter";
import { ExportToExcel } from "../../../features/ExportToExcel";
import { getRouteEmployeeDetails } from "@/shared/consts/routerConsts";

interface EmployeeListProps {
	className?: string;
	employees: Employee[];
	isLoading: boolean;
}
export const EmployeeList = memo(function EmployeeList(
	props: EmployeeListProps
) {
	const { className, employees, isLoading } = props;
	const { t } = useTranslation();

	const tableColumns: Column<Employee>[] = [
		{ key: "id", header: "No." },
		{ key: "avatar", header: "Photo" },
		{ key: "firstName", header: "First Name" },
		{ key: "lastName", header: "Last Name" },
		{
			key: "birthDay",
			header: "Birthday",
			render: (value) => formatDate(value as string),
		},
		{ key: "contractData", header: "Capacity", nestedKeys: ["position"] },
		{
			key: "registrationAddress",
			header: "Location",
			nestedKeys: ["city", "country"],
		},
		{ key: "phoneNumber", header: "Phone Number" },
		{ key: "email", header: "Email" },
		{
			key: "isAvailable",
			header: "Available",
			render: (value) => booleanToYesNo(value as boolean),
		},
	];

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!isLoading && !employees.length) {
		return (
			<div className={classNames(cls.employeeList, [className], {})}>
				<TextHolder size={"l"} title={t("Employees not found")} />
			</div>
		);
	}

	return (
		<>
			<GenericTable<Employee>
				title="List of employees"
				columns={tableColumns}
				data={employees}
				redirect={getRouteEmployeeDetails}
			>
				<ExportToExcel
					data={employees}
					isLoading={isLoading}
					fileName="Employees"
				/>
			</GenericTable>
		</>
	);
});
