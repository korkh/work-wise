import React from "react";
import { Column } from "@/shared/types/ui_components";
import { Avatar } from "../../../../../shared/ui/Avatar";

export function TableCellRenderer<T>(
	item: T,
	column: Column<T>
): React.ReactNode {
	const { key, nestedKeys } = column;

	// Traverse nested keys to get the final value
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const getNestedValue = (obj: any, keys: string[]): any => {
		return keys.reduce(
			(value, k) => (value && value[k] !== undefined ? value[k] : null),
			obj
		);
	};

	const value = nestedKeys ? getNestedValue(item[key], nestedKeys) : item[key];

	if (key === "avatar") {
		return <Avatar src={String(value)} size={50} alt="Avatar" />;
	}

	if (value && typeof value === "object") {
		return JSON.stringify(value);
	}

	const stringValue = String(value);

	return (
		<div style={{ position: "relative" }}>
			<span>
				{stringValue.length > 20
					? `${stringValue.substring(0, 20)}...`
					: stringValue}
			</span>
			{stringValue.length > 20 && (
				<span className="tooltip">{stringValue}</span>
			)}
		</div>
	);
}
