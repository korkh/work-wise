import { Column } from "@/shared/types/ui_components";
import React from "react";

export function TableCellRenderer<T>(
	item: T,
	column: Column<T>
): React.ReactNode {
	const { key, render, nestedKeys } = column;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const value: any = item[key];

	if (render) {
		return render(value, item);
	}

	// Handle nested properties dynamically
	if (nestedKeys && typeof value === "object" && value !== null) {
		const formattedValues = nestedKeys
			.map((k) => value[k]) // Access the value[k] dynamically
			.filter((v) => v != null) // Filter out null or undefined
			.join(", "); // Join values with a comma
		return formattedValues || JSON.stringify(value); // Fallback to stringify if empty
	}

	// Default rendering for other types
	if (typeof value === "object" && value !== null) {
		return JSON.stringify(value);
	}

	return String(value);
}
