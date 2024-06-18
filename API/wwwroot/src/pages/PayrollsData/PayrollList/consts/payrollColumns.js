import { useTranslation } from "react-i18next";
export const getPayrollColumns = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = useTranslation("payrolls");
    return [
        { key: "id", header: "No." },
        {
            key: "employee",
            header: t("Last name"),
            nestedKeys: ["lastName"],
        },
        { key: "year", header: t("Year") },
        { key: "month", header: t("Month") },
        { key: "workingDays", header: t("Working Days") },
        { key: "workingHours", header: t("Working Hours") },
        { key: "atlyginimasPagalDS", header: t("Atlyginimas Pagal DS") },
        { key: "darboDienu", header: t("Darbo Dienų") },
        { key: "darboValandu", header: t("Darbo Valandų") },
        { key: "virsvalandziai", header: t("Virsvalandžiai") },
        {
            key: "sventinesIrPoilsioValandos",
            header: t("Sventinės Ir Poilsio Valandos"),
        },
        {
            key: "pirmaEilesPareigosTaikomasNPD",
            header: t("Pirma Eilės Pareigos Taikomas NPD"),
        },
        { key: "npd", header: t("NPD") },
        { key: "atlyginimas", header: t("Atlyginimas") },
        { key: "atostogos", header: t("Atostogos") },
        {
            key: "virsvalandziaiPriskaityta",
            header: t("Virsvalandžiai Priskaityta"),
        },
        { key: "priedas", header: t("Priedas") },
        {
            key: "priedasUzPoilsioIrSventines",
            header: t("Priedas Už Poilsio Ir Sventines"),
        },
        { key: "liga2d", header: t("Liga 2d") },
        { key: "isVisoPriskaityta", header: t("Iš Viso Priskaityta") },
        { key: "pajamuMokestis20", header: t("Pajamų Mokestis 20%") },
        { key: "pajamuMokestis15", header: t("Pajamų Mokestis 15%") },
        { key: "pajamuMokestisOlandija", header: t("Pajamų Mokestis Olandija") },
        { key: "sodra_19", header: t("Sodra 19%") },
        { key: "sodra_3", header: t("Sodra 3%") },
        { key: "isVisoIsskaityta", header: t("Iš Viso Išskaityta") },
        { key: "ismoketi", header: t("Išmokėti") },
        { key: "bankas", header: t("Bankas") },
        { key: "baudos", header: t("Baudos") },
        { key: "likutis", header: t("Likutis") },
        { key: "sodra_1", header: t("Sodra 1%") },
        { key: "sodraIsViso", header: t("Sodra Iš Viso") },
        { key: "dienpinigai", header: t("Dienpinigai") },
        { key: "additionalCalculation", header: t("Additional Calculation") },
        { key: "kiekTuriGauti", header: t("Kiek Turi Gauti") },
    ];
};
