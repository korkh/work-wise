import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./TimeCardRows.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { EmployeeTimeCard } from "../../model/types/EmployeeTimeCard";
import { daysInMonth } from "../../model/consts/consts";
import { ToolTipCell } from "@/shared/ui/Table/ui/ToolTipCell";
import { TextHolder } from "@/shared/ui/TextHolder";
import { WorkingInits } from "../../model/consts/working_states";

type AdjustedWorkingHours = {
	[id: string]: number;
};

interface TimeCardRowsProps {
	form?: EmployeeTimeCard[] | undefined;
	selectedMonth: string;
	handleWorkingStateChange: (
		id: string,
		day: number,
		state: string | number
	) => void;
	adjustedWorkingHours: AdjustedWorkingHours;
}

export const TimeCardRows = memo(function TimeCardRows(
	props: TimeCardRowsProps
) {
	const {
		form,
		selectedMonth,
		handleWorkingStateChange,
		adjustedWorkingHours,
	} = props;
	const { t } = useTranslation();

	const [year, month] = selectedMonth.split("-").map(Number);
	const days = daysInMonth(year, month - 1);

	if (!form || form.length === 0)
		return (
			<tr>
				<td colSpan={10}>
					<TextHolder title={t("No data available")} />
				</td>
			</tr>
		);
	return form.map((timecard, index) => {
		const workingStatesMap = timecard.workingStates.reduce(
			(acc, ws) => {
				acc[ws.day] = ws.state;
				return acc;
			},
			{} as { [day: number]: string | number }
		);

		const totalWorkingDays = timecard.workingStates.filter(
			(ws) => typeof ws.state === "number" && ws.state > 0
		).length;

		const totalWorkingHours = timecard.workingStates.reduce<number>(
			(acc, ws) => {
				const parsedState =
					typeof ws.state === "string" ? Number(ws.state) : ws.state;
				if (!isNaN(parsedState)) {
					return acc + parsedState;
				}
				return acc;
			},
			0
		);

		const overtimeHours = timecard.workingStates.reduce<number>((acc, ws) => {
			const parsedHours =
				typeof ws.state === "string" ? Number(ws.state) : ws.state;
			if (!isNaN(parsedHours) && parsedHours > 8) {
				return acc + (parsedHours - 8);
			}
			return acc;
		}, 0);

		const overtimePS = timecard.workingStates.reduce<number>((acc, ws) => {
			if (
				typeof ws.state === "string" &&
				(ws.state.startsWith("P/") ||
					ws.state.startsWith("PK/") ||
					ws.state.startsWith("S/") ||
					ws.state.startsWith("SK/"))
			) {
				const hours = parseInt(ws.state.split("/")[1], 10);
				return acc + (isNaN(hours) ? 0 : hours);
			}
			return acc;
		}, 0);

		const komandirovkaDays = timecard.workingStates.filter(
			(ws) =>
				typeof ws.state === "string" &&
				(ws.state.startsWith("K") ||
					ws.state.startsWith("PK") ||
					ws.state.startsWith("SK"))
		).length;

		const illnessDays = timecard.workingStates.filter(
			(ws) => ws.state === WorkingInits.L
		).length;

		const absenceDaysReason = timecard.workingStates.filter(
			(ws) => ws.state === WorkingInits.A
		).length;

		const notPaidHolidays = timecard.workingStates.filter(
			(ws) => ws.state === WorkingInits.NA
		).length;

		const idleDays = timecard.workingStates.filter(
			(ws) => ws.state === WorkingInits.PV
		).length;

		const truancyDays = timecard.workingStates.filter(
			(ws) => ws.state === WorkingInits.PB
		).length;

		const totalAbsenceHours = timecard.workingStates.reduce<number>(
			(acc, ws) => {
				if (
					(typeof ws.state === "string" && ws.state === WorkingInits.NA) ||
					ws.state === WorkingInits.PB
				) {
					return acc + 8;
				}
				return acc;
			},
			0
		);

		const availableWorkingHours =
			adjustedWorkingHours[timecard.id] ??
			timecard.availableWorkingHoursPerMonth;

		return (
			<tr key={timecard.id}>
				<td>{index + 1}</td>
				<td className={cls.fullNameColumn}>
					<ToolTipCell
						str={`${timecard.employeeFirstName} ${timecard.employeeLastName}`}
						num={20}
					/>
				</td>
				<td>{availableWorkingHours}</td>
				{Array.from({ length: days }, (_, day) => {
					const date = new Date(year, month - 1, day + 1);
					const isWeekend = date.getDay() === 0 || date.getDay() === 6;
					const isHoliday = timecard.workingStates.some(
						(ws) => ws.day === day + 1 && ws.holiday
					);
					const defaultValue = isWeekend ? "P" : isHoliday ? "S" : "";
					return (
						<td
							key={day + 1}
							className={classNames(cls.inputCell, [], {
								[cls.weekend]: isWeekend,
								[cls.holiday]: isHoliday,
							})}
						>
							<input
								type="text"
								value={workingStatesMap[day + 1] || defaultValue}
								onChange={(e) => {
									const value = e.target.value.toUpperCase();
									handleWorkingStateChange(
										timecard.id,
										day + 1,
										isNaN(Number(value)) ? value : Number(value)
									);
								}}
								className={classNames("", [], {
									[cls.weekend]: isWeekend,
									[cls.holiday]: isHoliday,
								})}
							/>
						</td>
					);
				})}
				<td>{totalWorkingDays}</td>
				<td>{totalWorkingHours}</td>
				<td>{overtimeHours}</td>
				<td>{overtimePS}</td>
				<td>{komandirovkaDays}</td>
				<td>{absenceDaysReason}</td>
				<td>{notPaidHolidays}</td>
				<td>{idleDays}</td>
				<td>{truancyDays}</td>
				<td>{illnessDays}</td>
				<td>{totalAbsenceHours}</td>
			</tr>
		);
	});
});
