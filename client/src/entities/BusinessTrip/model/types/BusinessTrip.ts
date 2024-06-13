import { Employee } from "@/entities/Employee";

export interface BusinessTrip {
	id: string;
	employeeId?: string;
	employee?: Employee;
	laikotarpis?: Date | null;
	alga?: number;
	dienpinigai?: number;
	bankas?: number;
	baudos?: number;
	likutis?: number;
}
