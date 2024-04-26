import { Car } from "@/entities/Car";

export interface TransportInfo {
	drivingLicenseNumber: string;
	e100CardNumber: string;
	cars: Car[];
	expectedKmPerDay: number;
}
