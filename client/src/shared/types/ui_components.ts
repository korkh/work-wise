export type DropdownDirection =
	| "top left"
	| "top right"
	| "bottom left"
	| "bottom right";

/** Tables */
export type Column<T> = {
	key: keyof T;
	header: string;
};
