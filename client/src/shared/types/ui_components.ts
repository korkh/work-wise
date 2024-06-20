export type DropdownDirection =
	| "top left"
	| "top right"
	| "bottom left"
	| "bottom right";

/** Tables */
type RenderFunction<T, K extends keyof T> = (
	value: T[K],
	item: T
) => React.ReactNode;

export type NestedKeys = string[];

export interface Column<T, K extends keyof T = keyof T> {
	key: K;
	header: string;
	render?: RenderFunction<T, K>;
	nestedKeys?: NestedKeys;
	uniqueId?: string;
	notEditable?: boolean;
}

export interface Identifiable {
	id?: string | number;
}
