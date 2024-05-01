import React from "react";
import cls from "./GenericTable.module.scss";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { TextHolder } from "../../../TextHolder";
import { Column } from "@/shared/types/ui_components";
import { TableCellRenderer } from "../TableCellRenderer/TableCellRenderer";
import { AppLink } from "../../../../../shared/ui/AppLink";
import { getRouteEmployeeDetails } from "@/shared/consts/routerConsts";

interface Identifiable {
	id: string;
}

interface TableProps<T extends Identifiable> {
	columns: Column<T>[];
	data: T[];
	className?: string;
	title?: string;
}

export function GenericTable<T extends Identifiable>({
	className,
	columns,
	data,
	title,
}: TableProps<T>) {
	return (
		<table className={classNames(cls.genericTable, [className], {})}>
			<caption>
				<TextHolder align="center" title={title} />
			</caption>
			<thead>
				<tr>
					{columns.map((column) => (
						<th key={String(column.key)}>{column.header}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((row, index) => (
					<tr key={index}>
						{columns.map((column) => (
							<td key={`${index}-${String(column.key)}`}>
								<AppLink to={getRouteEmployeeDetails(row.id)}>
									{column.key === "id"
										? index + 1
										: TableCellRenderer(row, column)}
								</AppLink>
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}
