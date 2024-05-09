export function formatDate(dateString: string | null | undefined): string {
	if (!dateString) {
		return "N/A";
	}

	const date = new Date(dateString);
	if (isNaN(date.getTime())) {
		return "Invalid date";
	}

	return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}
