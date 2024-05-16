import { Payroll } from "@/entities/Payroll";
import { Column } from "@/shared/types/ui_components";

export const payrollColumns: Column<Payroll>[] = [
	{ key: "id", header: "No." },
	{
		key: "employee",
		header: "Last name",
		nestedKeys: ["lastName"],
	},
	{ key: "year", header: "Year" },
	{ key: "month", header: "Month" },
	{ key: "workingDays", header: "Working Days" },
	{ key: "workingHours", header: "Working Hours" },
	{ key: "atlyginimasPagalDS", header: "Atlyginimas Pagal DS" },
	{ key: "darboDienu", header: "Darbo Dienų" },
	{ key: "darboValandu", header: "Darbo Valandų" },
	{ key: "virsvalandziai", header: "Virsvalandžiai" },
	{
		key: "sventinesIrPoilsioValandos",
		header: "Sventinės Ir Poilsio Valandos",
	},
	{
		key: "pirmaEilesPareigosTaikomasNPD",
		header: "Pirma Eilės Pareigos Taikomas NPD",
	},
	{ key: "npd", header: "NPD" },
	{ key: "atlyginimas", header: "Atlyginimas" },
	{ key: "atostogos", header: "Atostogos" },
	{ key: "virsvalandziaiPriskaityta", header: "Virsvalandžiai Priskaityta" },
	{ key: "priedas", header: "Priedas" },
	{
		key: "priedasUzPoilsioIrSventines",
		header: "Priedas Už Poilsio Ir Sventines",
	},
	{ key: "liga2d", header: "Liga 2d" },
	{ key: "isVisoPriskaityta", header: "Iš Viso Priskaityta" },
	{ key: "pajamuMokestis20", header: "Pajamų Mokestis 20%" },
	{ key: "pajamuMokestis15", header: "Pajamų Mokestis 15%" },
	{ key: "pajamuMokestisOlandija", header: "Pajamų Mokestis Olandija" },
	{ key: "sodra_19", header: "Sodra 19%" },
	{ key: "sodra_3", header: "Sodra 3%" },
	{ key: "isVisoIsskaityta", header: "Iš Viso Išskaityta" },
	{ key: "ismoketi", header: "Išmokėti" },
	{ key: "bankas", header: "Bankas" },
	{ key: "baudos", header: "Baudos" },
	{ key: "likutis", header: "Likutis" },
	{ key: "sodra_1", header: "Sodra 1%" },
	{ key: "sodraIsViso", header: "Sodra Iš Viso" },
	{ key: "dienpinigai", header: "Dienpinigai" },
	{ key: "additionalCalculation", header: "Additional Calculation" },
	{ key: "kiekTuriGauti", header: "Kiek Turi Gauti" },
];
