export type Mods = Record<string, boolean | string | undefined>;
export type Classes = Array<string | undefined>;

export const classNames = (
	mainClass: string,
	additionalClasses: Classes = [],
	mods: Mods = {}
): string => {
	return [
		mainClass,
		...additionalClasses.filter(Boolean),
		...Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([className]) => className),
	].join(" ");
};
