export const truncateString = (str, maxLength) => str && str.length > maxLength ? `${str.substring(0, maxLength)}...` : str;
