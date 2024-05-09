import { useEffect, useState } from "react";
import cls from "./GenericTable.module.scss";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { TextHolder } from "../../../TextHolder";
import { Column } from "@/shared/types/ui_components";
import { TableCellRenderer } from "../TableCellRenderer/TableCellRenderer";
import { AppLink } from "../../../../../shared/ui/AppLink";
import { Input } from "../../../../../shared/ui/Input";
import SearchIcon from "../../../../assets/icons/search.svg?react";
import { Glyph } from "../../../../../shared/ui/Glyph";
import { SortOrder } from "@/shared/types/sort";

interface Identifiable {
	id?: string | number;
}

interface TableProps<T extends Identifiable, _U> {
	columns: Column<T>[];
	data: T[];
	className?: string;
	title?: string;
	redirect: (id: string) => string;
}

export function GenericTable<T extends Identifiable, U>({
	className,
	columns,
	data,
	title,
	redirect,
}: TableProps<T, U>) {
	const [filteredData, setFilteredData] = useState(data);
	const [search, setSearch] = useState("");
	const [sortField, setSortField] = useState<keyof U | null>(null);
	const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

	useEffect(() => {
		let filtered = data;
		if (search) {
			filtered = filtered.filter((item) =>
				columns.some((column) => {
					const value = item[column.key as keyof T];
					return String(value).toLowerCase().includes(search.toLowerCase());
				})
			);
		}
		if (sortField) {
			filtered.sort((a, b) => {
				const aValue = a[sortField as keyof T];
				const bValue = b[sortField as keyof T];
				if (sortOrder === "asc") {
					return String(aValue).localeCompare(String(bValue));
				} else {
					return String(bValue).localeCompare(String(aValue));
				}
			});
		}
		setFilteredData(filtered);
	}, [data, search, sortField, sortOrder, columns]);

	const handleSearchChange = (value: string) => {
		setSearch(value);
	};

	return (
		<table className={classNames(cls.genericTable, [className], {})}>
			<caption>
				<TextHolder align="center" title={title} />
				<Input
					className={classNames(cls.searchInput, [], {})}
					placeholder="Search..."
					value={search}
					onChange={handleSearchChange}
					bufferLeft={<Glyph SvgImage={SearchIcon} />}
				/>
			</caption>
			<thead>
				<tr>
					{columns.map((column) => (
						<th
							key={String(column.key)}
							onClick={() => {
								const newOrder =
									sortField === column.key && sortOrder === "asc"
										? "desc"
										: "asc";
								setSortField(column.key as keyof U);
								setSortOrder(newOrder);
							}}
						>
							{column.header}
							{sortField === column.key
								? sortOrder === "asc"
									? " 🔼"
									: " 🔽"
								: null}
						</th>
					))}
				</tr>
			</thead>

			<tbody>
				{filteredData.map((row, index) => (
					<tr key={index}>
						{columns.map((column) => (
							<td key={`${index}-${String(column.key)}`}>
								{row.id && (
									<AppLink to={redirect(String(row.id))}>
										{column.key === "id"
											? index + 1
											: TableCellRenderer(row, column)}
									</AppLink>
								)}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}
