import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import cls from "./GenericTable.module.scss";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { TextHolder } from "../../../../../shared/ui/TextHolder";
import { TableCellRenderer } from "../TableCellRenderer/TableCellRenderer";
import { AppLink } from "../../../../../shared/ui/AppLink";
import { Input } from "../../../../../shared/ui/Input";
import SearchIcon from "../../../../assets/icons/search.svg?react";
import { Glyph } from "../../../../../shared/ui/Glyph";
import { Pagination } from "../Pagination";
import { RowStack } from "../../../../../shared/ui/Stack";
import { Button } from "../../../Button";
import { sortValues } from "@/shared/lib/utils/table/sorting/sorting_filtering";
import { useTranslation } from "react-i18next";
export function GenericTable({ className, columns, data, title, children, redirect, verticalHeaders = false, getRowClass, onDataChange, editable = false, }) {
    const [filteredData, setFilteredData] = useState(data);
    const [search, setSearch] = useState("");
    const [sortField, setSortField] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const [editingRowId, setEditingRowId] = useState(null);
    const [editingRowData, setEditingRowData] = useState(null);
    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);
    const paginatedData = filteredData.slice(startIndex, endIndex);
    const { t } = useTranslation();
    useEffect(() => {
        let filtered = data;
        if (search) {
            filtered = filtered.filter((item) => columns.some((column) => {
                if (column.nestedKeys && column.nestedKeys.length > 0) {
                    const nestedObject = item[column.key];
                    return column.nestedKeys.some((nestedKey) => nestedObject &&
                        String(nestedObject[nestedKey])
                            .toLowerCase()
                            .includes(search.toLowerCase()));
                }
                else {
                    const value = item[column.key];
                    return String(value).toLowerCase().includes(search.toLowerCase());
                }
            }));
        }
        if (sortField) {
            filtered.sort((a, b) => {
                const aValue = a[sortField];
                const bValue = b[sortField];
                return sortValues(aValue, bValue, sortOrder);
            });
        }
        setFilteredData(filtered);
    }, [data, search, sortField, sortOrder, columns]);
    const handleSearchChange = (value) => {
        setSearch(value);
    };
    const handleEdit = (row) => {
        setEditingRowId(row.id);
        setEditingRowData({ ...row });
    };
    const handleCancelEdit = () => {
        setEditingRowId(null);
        setEditingRowData(null);
    };
    const handleSave = () => {
        if (editingRowData) {
            const updatedData = data.map((item) => item.id === editingRowData.id ? editingRowData : item);
            onDataChange?.(updatedData.filter((item) => item.id === editingRowData.id));
        }
        setEditingRowId(null);
        setEditingRowData(null);
    };
    const handleInputChange = (key, value) => {
        if (editingRowData) {
            setEditingRowData({ ...editingRowData, [key]: value });
        }
    };
    return (_jsxs(_Fragment, { children: [_jsxs("table", { className: classNames(cls.genericTable, [className]), children: [_jsxs("caption", { children: [_jsx(TextHolder, { align: "center", title: title }), _jsxs(RowStack, { max: true, gap: "16", align: "center", justify: "between", children: [_jsx(Input, { className: classNames(cls.searchInput, [], {}), placeholder: "Search...", value: search, onChange: handleSearchChange, bufferLeft: _jsx(Glyph, { SvgImage: SearchIcon }) }), children] })] }), _jsx("thead", { children: _jsxs("tr", { children: [columns.map((column) => (_jsx("th", { className: classNames("", [className], {
                                        [cls.verticalHeader]: verticalHeaders,
                                    }), onClick: () => {
                                        const newOrder = sortField === column.key && sortOrder === "asc"
                                            ? "desc"
                                            : "asc";
                                        setSortField(column.key);
                                        setSortOrder(newOrder);
                                    }, children: _jsxs(RowStack, { justify: "center", align: "center", children: [column.header, sortField === column.key
                                                ? sortOrder === "asc"
                                                    ? " 🔼"
                                                    : " 🔽"
                                                : null] }) }, String(column.uniqueId || column.key)))), editable && _jsx("th", {})] }) }), _jsx("tbody", { children: paginatedData.map((row, rowIndex) => {
                            const rowClass = getRowClass ? getRowClass(row) : "";
                            const isEditing = editingRowId === row.id;
                            return (_jsxs("tr", { className: rowClass, children: [columns.map((column) => (_jsx("td", { children: isEditing && !column.notEditable ? (_jsx("input", { className: cls.editableInput, type: "text", value: String(editingRowData?.[column.key] || ""), onChange: (e) => handleInputChange(column.key, e.target.value) })) : row.id && row.id !== undefined ? (redirect ? (_jsx(AppLink, { to: redirect(String(row.id)), children: column.key === "id"
                                                ? rowIndex + 1
                                                : column.render
                                                    ? column.render(row[column.key], row)
                                                    : TableCellRenderer(row, column) })) : column.key === "id" ? (rowIndex + 1) : column.render ? (column.render(row[column.key], row)) : (TableCellRenderer(row, column))) : null }, `${rowIndex}-${String(column.uniqueId || column.key)}`))), editable && (_jsx("td", { children: isEditing ? (_jsxs(RowStack, { gap: "8", children: [_jsx(Button, { size: "s", onClick: handleSave, color: "success", children: t("Save") }), _jsx(Button, { size: "s", onClick: handleCancelEdit, color: "error", children: t("Cancel") })] })) : (_jsx(Button, { size: "s", onClick: () => handleEdit(row), children: t("Edit") })) }))] }, row.id));
                        }) })] }), filteredData.length > itemsPerPage && (_jsx(Pagination, { totalItems: filteredData.length, itemsPerPage: itemsPerPage, currentPage: currentPage, onPageChange: setCurrentPage }))] }));
}
