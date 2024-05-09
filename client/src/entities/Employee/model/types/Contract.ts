export interface Contract {
	position?: string;
	contractNumber?: string;
	acceptionDate?: Date | null;
	dismissalDate?: Date | null;
	employmentDays?: number;
	annualHolidays?: number;
	fatherHolidays?: number;
	unpaidHolidays?: number;
	truancyDays?: number;
	allowedAbsenceDays?: number;
	unusedHolidays?: number;
}
