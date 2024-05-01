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

export interface Column<T, K extends keyof T = keyof T> {
	key: K;
	header: string;
	render?: RenderFunction<T, K>;
	nestedKeys?: string[]; // List of keys to use in rendering if value is an object
}
