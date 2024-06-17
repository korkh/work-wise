import { BusinessTrip } from "@/entities/BusinessTrip";
import { BusinessTripSummary } from "../types/businessTripsSummaries";
import { v4 as uuidv4 } from "uuid";

export function getSummarizedBusinessTrips(
	businessTrips: BusinessTrip[]
): BusinessTripSummary[] {
	const summaries: Record<string, BusinessTripSummary> = {};

	businessTrips.forEach((trip) => {
		if (!trip.laikotarpis || !trip.employeeId || !trip.employee) return;

		const year = new Date(trip.laikotarpis).getFullYear();
		const key = `${trip.employeeId}-${year}`;

		if (!summaries[key]) {
			summaries[key] = {
				id: uuidv4(),
				employeeId: trip.employeeId,
				avatar: trip.employee.avatar,
				employeeName: trip.employee.lastName,
				year: year,
				totalAlga: 0,
				totalDienpinigai: 0,
				totalBankas: 0,
				totalBaudos: 0,
				totalLikutis: 0,
				formerYearLikutis: 0,
			};
		}

		summaries[key].totalAlga += trip.alga || 0;
		summaries[key].totalDienpinigai += trip.dienpinigai || 0;
		summaries[key].totalBankas += trip.bankas || 0;
		summaries[key].totalBaudos += trip.baudos || 0;
		summaries[key].totalLikutis += trip.likutis || 0;
	});

	// Ensure all totals have 2 digits after the decimal point
	Object.values(summaries).forEach((summary) => {
		summary.totalAlga = parseFloat(summary.totalAlga.toFixed(2));
		summary.totalDienpinigai = parseFloat(summary.totalDienpinigai.toFixed(2));
		summary.totalBankas = parseFloat(summary.totalBankas.toFixed(2));
		summary.totalBaudos = parseFloat(summary.totalBaudos.toFixed(2));
		summary.totalLikutis = parseFloat(summary.totalLikutis.toFixed(2));

		const formerYearKey = `${summary.employeeId}-${summary.year - 1}`;
		if (summaries[formerYearKey]) {
			summary.formerYearLikutis = summaries[formerYearKey].totalLikutis;
		}
		if (summary.formerYearLikutis) {
			summary.formerYearLikutis = parseFloat(
				summary.formerYearLikutis.toFixed(2)
			);
			summary.totalLikutis += summary.formerYearLikutis;
		}

		summary.totalLikutis = parseFloat(summary.totalLikutis.toFixed(2));
	});

	return Object.values(summaries);
}
