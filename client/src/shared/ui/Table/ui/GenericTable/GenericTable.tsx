import React, { ReactNode, useEffect, useState } from "react";
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
import { Button } from "../../../Button";
import { sortValues } from "@/shared/lib/utils/table/sorting/sorting_filtering";
import { useTranslation } from "react-i18next";

interface TableProps<T extends Identifiable> {
	columns: Column<T>[];
	data: T[];
	className?: string;
	title?: string;
	redirect?: (id: string) => string;
	children?: ReactNode;
	verticalHeaders?: boolean;
	getRowClass?: (row: T) => string;
	onDataChange?: (updatedData: T[]) => void;
	editable?: boolean;
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
	onDataChange,
	editable = false,
}: TableProps<T>) {
	const [filteredData, setFilteredData] = useState(data);
	const [search, setSearch] = useState("");
	const [sortField, setSortField] = useState<string | null>(null);
	const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
	const [currentPage, setCurrentPage] = useState(1);
	const [editingRowId, setEditingRowId] = useState<string | number | null>(
		null
	);
	const [editingRowData, setEditingRowData] = useState<T | null>(null);

	const itemsPerPage = 10;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);
	const paginatedData = filteredData.slice(startIndex, endIndex);

	const { t } = useTranslation();

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

	const handleEdit = (row: T) => {
		setEditingRowId(row.id!);
		setEditingRowData({ ...row });
	};

	const handleCancelEdit = () => {
		setEditingRowId(null);
		setEditingRowData(null);
	};

	const handleSave = () => {
		if (editingRowData) {
			const updatedData = data.map((item) =>
				item.id === editingRowData.id ? editingRowData : item
			);
			onDataChange?.(
				updatedData.filter((item) => item.id === editingRowData.id)
			);
		}
		setEditingRowId(null);
		setEditingRowData(null);
	};

	const handleInputChange = (key: keyof T, value: string) => {
		if (editingRowData) {
			setEditingRowData({ ...editingRowData, [key]: value });
		}
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
						{editable && <th>{/* Actions Column Header */}</th>}
					</tr>
				</thead>
				<tbody>
					{paginatedData.map((row, rowIndex) => {
						const rowClass = getRowClass ? getRowClass(row) : "";
						const isEditing = editingRowId === row.id;
						return (
							<tr key={row.id} className={rowClass}>
								{columns.map((column) => (
									<td
										key={`${rowIndex}-${String(column.uniqueId || column.key)}`}
									>
										{isEditing && !column.notEditable ? (
											<input
												className={cls.editableInput}
												type="text"
												value={String(editingRowData?.[column.key] || "")}
												onChange={(e) =>
													handleInputChange(column.key, e.target.value)
												}
											/>
										) : row.id && row.id !== undefined ? (
											redirect ? (
												<AppLink to={redirect(String(row.id))}>
													{column.key === "id"
														? rowIndex + 1
														: column.render
															? column.render(row[column.key], row)
															: TableCellRenderer(row, column)}
												</AppLink>
											) : column.key === "id" ? (
												rowIndex + 1
											) : column.render ? (
												column.render(row[column.key], row)
											) : (
												TableCellRenderer(row, column)
											)
										) : null}
									</td>
								))}
								{editable && (
									<td>
										{isEditing ? (
											<RowStack gap="8">
												<Button size="s" onClick={handleSave} color="success">
													{t("Save")}
												</Button>
												<Button
													size="s"
													onClick={handleCancelEdit}
													color="error"
												>
													{t("Cancel")}
												</Button>
											</RowStack>
										) : (
											<Button size="s" onClick={() => handleEdit(row)}>
												{t("Edit")}
											</Button>
										)}
									</td>
								)}
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
