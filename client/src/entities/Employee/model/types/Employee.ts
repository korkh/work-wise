import { Payroll } from "@/entities/Payroll";
import { Address } from "./Address";
import { Contract } from "./Contract";
import { TransportInfo } from "./TransportInfo";
import { EmployeeDocument } from "../../../../entities/Document/model/types/EmployeeDocument";

export interface Employee {
	id?: string;
	rowVersion?: Uint8Array;
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
