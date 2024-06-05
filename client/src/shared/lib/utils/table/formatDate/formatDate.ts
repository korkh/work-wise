export function formatDate(dateString: string | null | undefined): string {
	if (!dateString) {
		return "N/A";
	}

	const date = new Date(dateString);
	if (isNaN(date.getTime())) {
		return "Invalid date";
	}

	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = (date.getDay() + 1).toString().padStart(2, "0");

	return `${day}-${month}-${year}`;
}
