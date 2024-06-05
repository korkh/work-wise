import { ReactNode, useEffect, useState } from "react";
import cls from "./GenericTable.module.scss";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { TextHolder } from "../../../../../shared/ui/TextHolder";
import { Column, Identifiable } from "@/shared/types/ui_components";
import { TableCellRenderer } from "../TableCellRenderer/TableCellRenderer";
import { AppLink } from "../../../../../shared/ui/AppLink";
import { Input } from "../../../../../shared/ui/Input";
import SearchIcon from "../../../../assets/icons/search.svg?react";
import { Glyph } from "../../../../../shared/ui/Glyph";
import { SortOrder } from "@/shared/types/sort";
import { Pagination } from "../Pagination";
import { RowStack } from "../../../../../shared/ui/Stack";
import { sortValues } from "@/shared/lib/utils/table/sorting/sorting_filtering";

interface TableProps<T extends Identifiable> {
	columns: Column<T>[];
	data: T[];
	className?: string;
	title?: string;
	redirect?: (id: string) => string;
	children?: ReactNode;
	verticalHeaders?: boolean;
	getRowClass?: (row: T) => string;
}

export function GenericTable<T extends Identifiable>({
	className,
	columns,
	data,
	title,
	children,
	redirect,
	verticalHeaders = false,
	getRowClass,
}: TableProps<T>) {
	const [filteredData, setFilteredData] = useState(data);
	const [search, setSearch] = useState("");
	const [sortField, setSortField] = useState<string | null>(null);
	const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10;

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);

	const paginatedData = filteredData.slice(startIndex, endIndex);
	console.log("Paginated Data:", paginatedData);

	useEffect(() => {
		let filtered = data;
		if (search) {
			filtered = filtered.filter((item) =>
				columns.some((column) => {
					if (column.nestedKeys && column.nestedKeys.length > 0) {
						const nestedObject = item[column.key] as Record<string, unknown>;
						return column.nestedKeys.some(
							(nestedKey) =>
								nestedObject &&
								String(nestedObject[nestedKey])
									.toLowerCase()
									.includes(search.toLowerCase())
						);
					} else {
						const value = item[column.key];
						return String(value).toLowerCase().includes(search.toLowerCase());
					}
				})
			);
		}
		if (sortField) {
			filtered.sort((a, b) => {
				const aValue = a[sortField as keyof T];
				const bValue = b[sortField as keyof T];
				return sortValues(aValue, bValue, sortOrder);
			});
		}
		setFilteredData(filtered);
	}, [data, search, sortField, sortOrder, columns]);

	const handleSearchChange = (value: string) => {
		setSearch(value);
	};

	return (
		<>
			<table className={classNames(cls.genericTable, [className])}>
				<caption>
					<TextHolder align="center" title={title} />
					<RowStack max gap="16" align="center" justify="between">
						<Input
							className={classNames(cls.searchInput, [], {})}
							placeholder="Search..."
							value={search}
							onChange={handleSearchChange}
							bufferLeft={<Glyph SvgImage={SearchIcon} />}
						/>
						{children}
					</RowStack>
				</caption>
				<thead>
					<tr>
						{columns.map((column) => (
							<th
								key={String(column.uniqueId || column.key)}
								className={classNames("", [className], {
									[cls.verticalHeader]: verticalHeaders,
								})}
								onClick={() => {
									const newOrder =
										sortField === column.key && sortOrder === "asc"
											? "desc"
											: "asc";
									setSortField(column.key as string);
									setSortOrder(newOrder);
								}}
							>
								<RowStack justify="center" align="center">
									{column.header}
									{sortField === column.key
										? sortOrder === "asc"
											? " 🔼"
											: " 🔽"
										: null}
								</RowStack>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{paginatedData.map((row, index) => {
						const rowClass = getRowClass ? getRowClass(row) : "";
						return (
							<tr key={row.id} className={rowClass}>
								{columns.map((column) => (
									<td key={`${index}-${String(column.uniqueId || column.key)}`}>
										{row.id && row.id !== undefined ? (
											redirect ? (
												<AppLink to={redirect(String(row.id))}>
													{column.key === "id"
														? index + 1
														: column.render
															? column.render(row[column.key], row)
															: TableCellRenderer(row, column)}
												</AppLink>
											) : column.key === "id" ? (
												index + 1
											) : column.render ? (
												column.render(row[column.key], row)
											) : (
												TableCellRenderer(row, column)
											)
										) : null}
									</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
			{filteredData.length > itemsPerPage && (
				<Pagination
					totalItems={filteredData.length}
					itemsPerPage={itemsPerPage}
					currentPage={currentPage}
					onPageChange={setCurrentPage}
				/>
			)}
		</>
	);
}
