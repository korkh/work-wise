export const truncateString = (str: string, maxLength: number) =>
	str.length > maxLength ? `${str.substring(0, maxLength)}...` : str;
