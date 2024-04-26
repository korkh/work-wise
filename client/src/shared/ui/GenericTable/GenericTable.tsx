import cls from "./GenericTable.module.scss";
import { useTranslation } from "react-i18next";
import { ReactNode, memo } from "react";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { Column } from "@/shared/types/ui_components";

interface TableProps<T> {
	columns: Column<T>[];
	data: T[];
	className?: string;
}

export const GenericTable = memo(function Table<T>(props: TableProps<T>) {
	const { className, columns, data } = props;
	const { t } = useTranslation();
	return (
		<table className={classNames(cls.genericTable, [className], {})}>
			{t("Table")}
			<head>
				<tr>
					{columns.map((column) => (
						<th key={column.key.toString()}>{column.header}</th>
					))}
				</tr>
			</head>
			<tbody>
				{data.map((row, index) => (
					<tr key={index}>
						{columns.map((column) => (
							<td key={column.key.toString()}>
								{row[column.key] as ReactNode}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
});
