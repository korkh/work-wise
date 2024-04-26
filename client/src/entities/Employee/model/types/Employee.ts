import { Payroll } from "@/entities/Payroll";
import { Address } from "./Address";
import { Contract } from "./Contract";
import { TransportInfo } from "./TransportInfo";

export interface Employee {
	id: string;
	rowVersion?: Uint8Array;
	firstName: string;
	lastName: string;
	birthDate: Date;
	registrationAddress: Address;
	phoneNumber: string;
	email: string;
	isAvailable: boolean;
	isFired: boolean;
	transportInfo: TransportInfo;
	contractData: Contract;
	documents: Document[];
	payrolls: Payroll[];
}
