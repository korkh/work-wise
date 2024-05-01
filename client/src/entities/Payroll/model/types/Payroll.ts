export interface Payroll {
	id: string;
	rowVersion: Uint8Array;
	employeeId: string;
	employeeFirstName: string;
	employeeLastName: string;
	year: number;
	month: number;
	workingDays: number;
	workingHours: number;
	atlyginimasPagalDS: number;
	darboDienu: number;
	darboValandu: number;
	virsvalandziai: number;
	sventinesIrPoilsioValandos: number;
	pirmaEilesPareigosTaikomasNPD: number;
	NPD: number;

	// PRISKAITYTA
	atlyginimas: number;
	atostogos: number;
	virsvalandziaiPriskaityta: number;
	priedas: number;
	priedasUzPoilsioIrSventines: number;
	liga2d: number;
	isVisoPriskaityta: number;

	// ISSAKITYTA
	pajamuMokestis20: number;
	pajamuMokestis15: number;
	pajamuMokestisOlandija: number;
	sodra_19: number;
	sodra_3: number;
	isVisoIsskaityta: number;
	ismoketi: number;
	bankas: number;
	baudos: number;
	likutis: number;
	sodra_1: number;
	sodraIsViso: number;
	dienpinigai: number;
	additionalCalculation: number;
	kiekTuriGauti: number;
}
