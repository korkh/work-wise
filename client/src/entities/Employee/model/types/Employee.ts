import { Payroll } from "@/entities/Payroll";
import { Address } from "./Address";
import { Contract } from "./Contract";
import { TransportInfo } from "./TransportInfo";
import { EmployeeDocument } from "../../../../entities/Document/model/types/EmployeeDocument";

export type EmployeeId = string | number;

export interface Employee {
	id?: EmployeeId;
	avatar?: string;
	firstName?: string;
	lastName?: string;
	birthDay?: Date | null;
	registrationAddress?: Address;
	phoneNumber?: string;
	email?: string;
	isAvailable?: boolean;
	isFired?: boolean;
	transportInfo?: TransportInfo;
	contractData?: Contract;
	documents?: EmployeeDocument[];
	payrolls?: Payroll[];
}
