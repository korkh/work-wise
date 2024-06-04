export type WorkingState = {
	id: string;
	day: number;
	state: string | number;
	holiday?: boolean;
};

export interface EmployeeTimeCard {
	id: string;
	employeeFirstName: string;
	employeeLastName: string;
	month: string;
	availableWorkingHoursPerMonth?: number;
	workingStates: WorkingState[];
}

export interface EmployeeTimeCardSchema {
	data?: EmployeeTimeCard[];
	form?: EmployeeTimeCard[];
	selectedMonth: string;
	readonly: boolean;
	isLoading: boolean;
	error?: string;
}
