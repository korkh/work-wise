export interface EmployeeDocument {
	id: string;
	employeeId: string;
	title: string;
	issueDate: Date;
	expirationDate: Date;
	hasTwoMonthWarning: boolean;
	hasThreeMonthWarning: boolean;
	hasSixMonthWarning: boolean;
}
