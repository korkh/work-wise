import { Identifiable } from "@/shared/types/ui_components";

export interface BusinessTripSummary extends Identifiable {
	id: string;
	employeeId: string;
	avatar?: string;
	employeeName: string;
	year: number;
	totalAlga: number;
	totalDienpinigai: number;
	totalBankas: number;
	totalBaudos: number;
	totalLikutis: number;
	formerYearLikutis?: number;
}
