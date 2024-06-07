import { Employee } from "@/entities/Employee";

export interface EmployeeDocument {
	id?: string;
	employee?: Employee;
	employeeId?: string;
	title?: string;
	issueDate?: Date | null;
	expirationDate?: Date | null;
	hasTwoMonthWarning?: boolean;
	hasThreeMonthWarning?: boolean;
	hasSixMonthWarning?: boolean;
}
