import cls from "./TimeCardSummaryRows.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useEffect, useState } from "react";
import { EmployeeTimeCard } from "../../model/types/EmployeeTimeCard";
import { getDaysInMonth } from "../../model/consts/consts";

interface TimeCardSummaryRowsProps {
	form?: EmployeeTimeCard[] | undefined;
	selectedMonth: string;
}

export const TimeCardSummaryRows = memo(function TimeCardSummaryRows(
	props: TimeCardSummaryRowsProps
) {
	const { form, selectedMonth } = props;
	const { t } = useTranslation();
	const [days, setDays] = useState<number>(1);

	useEffect(() => {
		setDays(getDaysInMonth(selectedMonth));
	}, [selectedMonth]);

	const totalWorkingDays =
		form?.reduce((acc, emp) => {
			const empWorkingDays = emp.workingStates.filter(
				(ws) => typeof ws.state === "number" && ws.state > 0
			).length;
			return acc + empWorkingDays;
		}, 0) || 0;

	const totalWorkingHours =
		form?.reduce((acc, emp) => {
			const empWorkingHours = emp.workingStates.reduce<number>((empAcc, ws) => {
				const parsedState =
					typeof ws.state === "string" ? Number(ws.state) : ws.state;
				if (!isNaN(parsedState)) {
					return empAcc + parsedState;
				}
				return empAcc;
			}, 0);
			return acc + empWorkingHours;
		}, 0) || 0;

	const totalOvertimeHours =
		totalWorkingHours > 160 ? totalWorkingHours - 160 : 0;

	const totalOvertimePS =
		form?.reduce((acc, emp) => {
			const empOvertimePS = emp.workingStates.reduce<number>((empAcc, ws) => {
				if (
					typeof ws.state === "string" &&
					(ws.state.startsWith("P/") || ws.state.startsWith("S/"))
				) {
					const hours = parseInt(ws.state.split("/")[1], 10);
					return empAcc + (isNaN(hours) ? 0 : hours);
				}
				return empAcc;
			}, 0);
			return acc + empOvertimePS;
		}, 0) || 0;

	const totalKomandirovkaDays =
		form?.reduce((acc, emp) => {
			const empKomandirovkaDays = emp.workingStates.filter(
				(ws) =>
					typeof ws.state === "string" &&
					(ws.state.startsWith("K") ||
						ws.state.startsWith("PK") ||
						ws.state.startsWith("SK"))
			).length;
			return acc + empKomandirovkaDays;
		}, 0) || 0;

	const totalIllnessDays =
		form?.reduce((acc, emp) => {
			const empIllnessDays = emp.workingStates.filter(
				(ws) => ws.state === "L"
			).length;
			return acc + empIllnessDays;
		}, 0) || 0;

	const totalAbsenceDaysReason =
		form?.reduce((acc, emp) => {
			const empAbsenceDaysReason = emp.workingStates.filter(
				(ws) => ws.state === "A"
			).length;
			return acc + empAbsenceDaysReason;
		}, 0) || 0;

	const totalNotPaidHolidays =
		form?.reduce((acc, emp) => {
			const empNotPaidHolidays = emp.workingStates.filter(
				(ws) => ws.state === "NA"
			).length;
			return acc + empNotPaidHolidays;
		}, 0) || 0;

	const totalIddleDays =
		form?.reduce((acc, emp) => {
			const empIdleDays = emp.workingStates.filter(
				(ws) => ws.state === "PV"
			).length;
			return acc + empIdleDays;
		}, 0) || 0;

	const totalTruancyDays =
		form?.reduce((acc, emp) => {
			const empTruancyDays = emp.workingStates.filter(
				(ws) => ws.state === "PB"
			).length;
			return acc + empTruancyDays;
		}, 0) || 0;

	const totalAbsenceHours =
		form?.reduce((acc, emp) => {
			const empAbsenceHours = emp.workingStates.reduce<number>((empAcc, ws) => {
				if (
					(typeof ws.state === "string" && ws.state === "NA") ||
					ws.state === "PB"
				) {
					return empAcc + 8;
				}
				return empAcc;
			}, 0);
			return acc + empAbsenceHours;
		}, 0) || 0;
	return (
		<tr className={cls.summaryRow}>
			<td colSpan={3}>{t("Summary")}</td>
			{Array.from({ length: days }, (_, i) => (
				<td key={i} />
			))}
			<td>{totalWorkingDays}</td>
			<td>{totalWorkingHours}</td>
			<td>{totalOvertimeHours}</td>
			<td>{totalOvertimePS}</td>
			<td>{totalKomandirovkaDays}</td>
			<td>{totalAbsenceDaysReason}</td>
			<td>{totalNotPaidHolidays}</td>
			<td>{totalIddleDays}</td>
			<td>{totalTruancyDays}</td>
			<td>{totalIllnessDays}</td>
			<td>{totalAbsenceHours}</td>
		</tr>
	);
});
