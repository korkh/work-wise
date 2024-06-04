export const truncateString = (str: string, maxLength: number) =>
	str && str.length > maxLength ? `${str.substring(0, maxLength)}...` : str;
