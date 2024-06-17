import React from "react";
import { Column } from "@/shared/types/ui_components";
import { Avatar } from "../../../../../shared/ui/Avatar";
import cls from "./TableCellRenderer.module.scss";
import { truncateString } from "@/shared/lib/utils/table/truncateString/truncateString";

export function TableCellRenderer<T>(
	item: T,
	column: Column<T>
): React.ReactNode {
	const { key, nestedKeys, render } = column;

	// Traverse nested keys to get the final value
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const getNestedValue = (obj: any, keys: string[]): any => {
		return keys.reduce(
			(value, k) => (value && value[k] !== undefined ? value[k] : null),
			obj
		);
	};

	const value = nestedKeys ? getNestedValue(item[key], nestedKeys) : item[key];

	// Use custom render function if provided
	if (render) {
		return render(value, item);
	}

	if (nestedKeys && nestedKeys.includes("avatar")) {
		return <Avatar src={String(value)} size={40} alt="Avatar" />;
	}

	if (key === "avatar") {
		return <Avatar src={String(value)} size={40} alt="Avatar" />;
	}

	if (value && typeof value === "object") {
		return JSON.stringify(value);
	}

	const stringValue = String(value);
	const maxLength = 20;
	return (
		<div className={cls.cellWithTooltip}>
			<span>{truncateString(stringValue, maxLength)}</span>
			{stringValue.length > maxLength && (
				<span className={cls.tooltip}>{stringValue}</span>
			)}
		</div>
	);
}
