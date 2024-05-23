export type WorkingState = Record<number, string | number>;

export interface EmployeeTimeCard {
	id: number;
	fullName: string;
	availableWorkingHoursPerMonth?: number;
	workingState: WorkingState;
}

export interface EmployeeTimeCardSchema {
	data?: EmployeeTimeCard[];
	selectedMonth: string;
	readonly: boolean;
	isLoading: boolean;
	error?: string;
}
