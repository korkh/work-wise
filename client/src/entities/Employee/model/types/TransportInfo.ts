import { Car } from "../../../../entities/Car/model/types/Car";

export interface TransportInfo {
	drivingLicenseNumber: string;
	e_100_CardNumber: string;
	cars: Car[];
	expectedKmPerDay: string;
}
