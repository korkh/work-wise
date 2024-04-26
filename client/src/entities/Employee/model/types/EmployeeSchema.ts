import { Employee } from "./Employee";

export interface EmployeeSchema {
	isLoading: boolean;
	error?: string;
	data?: Employee;
}
