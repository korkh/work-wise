export const valueToString = (value: unknown): string => {
	if (value === null || value === undefined) {
		return "";
	}
	return typeof value === "string" ? value : String(value);
};
