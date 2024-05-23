import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./EmployeeTimeCardPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
	DynamicReducerLoader,
	ReducersList,
} from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
	employeeTimeCardActions,
	employeeTimeCardReducer,
} from "../../model/slices/employeeTimeCardSlice";
import { useSelector } from "react-redux";
import {
	getEmployeeTiemCardSelectedMonth,
	getEmployeeTimeCardData,
} from "../../model/selectors/employeeTimeCard";
import { WorkingInits } from "../../model/consts/working_states";
import { TextHolder } from "@/shared/ui/TextHolder";
import { RowStack } from "@/shared/ui/Stack";
import { ToolTipCell } from "@/shared/ui/Table/ui/ToolTipCell";

interface EmployeeTimeCardPageProps {
	className?: string;
}

const reducers: ReducersList = {
	employeeTimeCard: employeeTimeCardReducer,
};

const EmployeeTimeCardPage = (props: EmployeeTimeCardPageProps) => {
	const { className } = props;
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const data = useSelector(getEmployeeTimeCardData);
	const selectedMonth = useSelector(getEmployeeTiemCardSelectedMonth);
	const [startDate, setStartDate] = useState(new Date());
	const [holidays, setHolidays] = useState<number[]>([]);

	const daysInMonth = (year: number, month: number) => {
		return new Date(year, month + 1, 0).getDate();
	};

	useEffect(() => {
		const initialData = [
			{
				id: 1,
				fullName: "John Doe",
				availableWorkingDaysPerMonth: 0,
				workingState: {},
			},
			{
				id: 2,
				fullName: "Peter Johnson",
				availableWorkingDaysPerMonth: 0,
				workingState: {},
			},
			{
				id: 3,
				fullName: "Nadir Abduhadi",
				availableWorkingDaysPerMonth: 0,
				workingState: {},
			},
			{
				id: 4,
				fullName: "John Doe",
				availableWorkingDaysPerMonth: 0,
				workingState: {},
			},
			{
				id: 5,
				fullName: "Peter Johnson",
				availableWorkingDaysPerMonth: 0,
				workingState: {},
			},
			{
				id: 6,
				fullName: "Nadir Abduhadi",
				availableWorkingDaysPerMonth: 0,
				workingState: {},
			},
		];
		dispatch(employeeTimeCardActions.setEmployeeData(initialData));
	}, [dispatch]);

	useEffect(() => {
		const year = startDate.getFullYear();
		const month = startDate.getMonth() + 1;
		const monthString = `${year}-${String(month).padStart(2, "0")}`;
		dispatch(employeeTimeCardActions.setSelectedMonth(monthString));
		dispatch(employeeTimeCardActions.updateAvailableWorkingDays(holidays));
	}, [startDate, dispatch, holidays]);

	const handleDateChange = (date: Date) => {
		setStartDate(date);
	};

	const handleWorkingStateChange = (
		id: number,
		day: number,
		state: string | number
	) => {
		const parsedState = isNaN(Number(state)) ? state : Number(state);
		dispatch(
			employeeTimeCardActions.updateEmployeeState({
				id,
				day,
				state: parsedState,
			})
		);
	};

	const toggleHoliday = (day: number) => {
		setHolidays((prevHolidays) => {
			const newHolidays = prevHolidays.includes(day)
				? prevHolidays.filter((d) => d !== day)
				: [...prevHolidays, day];
			dispatch(employeeTimeCardActions.updateAvailableWorkingDays(newHolidays));
			return newHolidays;
		});
	};

	const renderDaysHeaders = () => {
		if (!selectedMonth) return null;
		const [year, month] = selectedMonth.split("-").map(Number);
		const days = daysInMonth(year, month - 1);
		return Array.from({ length: days }, (_, i) => {
			const day = new Date(year, month - 1, i + 1).getDay();
			const isWeekend = day === 0 || day === 6;
			const isHoliday = holidays.includes(i + 1);
			return (
				<th
					key={i + 1}
					className={classNames("", [], {
						[cls.weekend]: isWeekend,
						[cls.holiday]: isHoliday,
					})}
					onClick={() => toggleHoliday(i + 1)} // Toggle holiday on click
				>
					{i + 1}
				</th>
			);
		});
	};

	const renderRows = () => {
		return data?.map((employee) => {
			const totalWorkingDays = Object.values(employee.workingState).filter(
				(state) => typeof state === "number" && state > 0
			).length;

			const totalWorkingHours = Object.values(
				employee.workingState
			).reduce<number>((acc, state) => {
				const parsedState = typeof state === "string" ? Number(state) : state;
				if (!isNaN(parsedState)) {
					return acc + parsedState;
				}
				return acc;
			}, 0);

			const overtimeHours = Object.entries(
				employee.workingState
			).reduce<number>((acc, [_, hours]) => {
				const parsedHours = typeof hours === "string" ? Number(hours) : hours;
				if (!isNaN(parsedHours) && parsedHours > 8) {
					return acc + (parsedHours - 8);
				}
				return acc;
			}, 0);

			const overtimePS = Object.values(employee.workingState).reduce<number>(
				(acc, state) => {
					if (
						typeof state === "string" &&
						(state.startsWith("P/") || state.startsWith("S/"))
					) {
						const hours = parseInt(state.split("/")[1], 10);
						return acc + (isNaN(hours) ? 0 : hours);
					}
					return acc;
				},
				0
			);

			const komandirovkaHours = Object.values(
				employee.workingState
			).reduce<number>((acc, state) => {
				if (typeof state === "string" && state.startsWith("K/")) {
					const hours = parseInt(state.split("/")[1], 10);
					return acc + (isNaN(hours) ? 0 : hours);
				}
				return acc;
			}, 0);

			const illnessDays = Object.values(employee.workingState).filter(
				(state) => state === WorkingInits.L
			).length;

			const absenceDaysReason = Object.values(employee.workingState).filter(
				(state) => state === WorkingInits.A
			).length;

			const absenceDaysNoReason = Object.values(employee.workingState).filter(
				(state) => state === WorkingInits.NA || state === WorkingInits.PV
			).length;

			const totalAbsenceHours = Object.values(
				employee.workingState
			).reduce<number>((acc, state) => {
				if (typeof state === "string" && state !== WorkingInits.L) {
					return acc + 8;
				}
				return acc;
			}, 0);

			const [year, month] = selectedMonth.split("-").map(Number);
			const days = daysInMonth(year, month - 1);

			return (
				<tr key={employee.id}>
					<td>{employee.id}</td>
					<td className={cls.fullNameColumn}>
						<ToolTipCell str={employee.fullName} num={20} />
					</td>
					<td>{employee.availableWorkingHoursPerMonth}</td>
					{Array.from({ length: days }, (_, day) => {
						const date = new Date(year, month - 1, day + 1);
						const isWeekend = date.getDay() === 0 || date.getDay() === 6;
						const isHoliday = holidays.includes(day + 1);
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
									value={employee.workingState[day + 1] || defaultValue}
									onChange={(e) => {
										const value = e.target.value.toUpperCase();
										handleWorkingStateChange(
											employee.id,
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
					<td>{komandirovkaHours}</td>
					<td>{absenceDaysReason}</td>
					<td>{absenceDaysNoReason}</td>
					<td>{illnessDays}</td>
					<td>{totalAbsenceHours}</td>
				</tr>
			);
		});
	};

	const renderSummaryHeaders = () => (
		<>
			<th className={cls.verticalHeader}>
				<ToolTipCell str={t("Working Days")} num={10} />
			</th>
			<th className={cls.verticalHeader}>
				<ToolTipCell str={t("Working Hours")} num={10} />
			</th>
			<th className={cls.verticalHeader}>{t("Overtime")}</th>
			<th className={cls.verticalHeader}>
				<ToolTipCell str={t("Overtime P & S")} num={10} />
			</th>
			<th className={cls.verticalHeader}>
				<ToolTipCell str={t("K")} num={10} />
			</th>
			<th className={cls.verticalHeader}>
				<ToolTipCell str={t("A")} num={10} />
			</th>
			<th className={cls.verticalHeader}>
				<ToolTipCell str={t("NA & PV")} num={10} />
			</th>
			<th className={cls.verticalHeader}>{t("Illness Days")}</th>
			<th className={cls.verticalHeader}>{t("Absence Hours")}</th>
		</>
	);

	const renderSummaryRow = () => {
		const totalWorkingDays =
			data?.reduce((acc, emp) => {
				const empWorkingDays = Object.values(emp.workingState).filter(
					(state) => typeof state === "number" && state > 0
				).length;
				return acc + empWorkingDays;
			}, 0) || 0;

		const totalWorkingHours =
			data?.reduce((acc, emp) => {
				const empWorkingHours = Object.values(emp.workingState).reduce<number>(
					(empAcc, state) => {
						const parsedState =
							typeof state === "string" ? Number(state) : state;
						if (!isNaN(parsedState)) {
							return empAcc + parsedState;
						}
						return empAcc;
					},
					0
				);
				return acc + empWorkingHours;
			}, 0) || 0;

		const totalOvertimeHours =
			totalWorkingHours > 160 ? totalWorkingHours - 160 : 0;

		const totalOvertimePS =
			data?.reduce((acc, emp) => {
				const empOvertimePS = Object.values(emp.workingState).reduce<number>(
					(empAcc, state) => {
						if (
							typeof state === "string" &&
							(state.startsWith("P/") || state.startsWith("S/"))
						) {
							const hours = parseInt(state.split("/")[1], 10);
							return empAcc + (isNaN(hours) ? 0 : hours);
						}
						return empAcc;
					},
					0
				);
				return acc + empOvertimePS;
			}, 0) || 0;

		const totalKomandirovkaHours =
			data?.reduce((acc, emp) => {
				const empKomandirovkaHours = Object.values(
					emp.workingState
				).reduce<number>((empAcc, state) => {
					if (typeof state === "string" && state.startsWith("K/")) {
						const hours = parseInt(state.split("/")[1], 10);
						return empAcc + (isNaN(hours) ? 0 : hours);
					}
					return empAcc;
				}, 0);
				return acc + empKomandirovkaHours;
			}, 0) || 0;

		const totalIllnessDays =
			data?.reduce((acc, emp) => {
				const empIllnessDays = Object.values(emp.workingState).filter(
					(state) => state === WorkingInits.L
				).length;
				return acc + empIllnessDays;
			}, 0) || 0;

		const totalAbsenceDaysReason =
			data?.reduce((acc, emp) => {
				const empAbsenceDaysReason = Object.values(emp.workingState).filter(
					(state) => state === WorkingInits.A
				).length;
				return acc + empAbsenceDaysReason;
			}, 0) || 0;

		const totalAbsenceDaysNoReason =
			data?.reduce((acc, emp) => {
				const empAbsenceDaysNoReason = Object.values(emp.workingState).filter(
					(state) => state === WorkingInits.NA || state === WorkingInits.PV
				).length;
				return acc + empAbsenceDaysNoReason;
			}, 0) || 0;

		const totalAbsenceHours =
			data?.reduce((acc, emp) => {
				const empAbsenceHours = Object.values(emp.workingState).reduce<number>(
					(empAcc, state) => {
						if (typeof state === "string" && state === WorkingInits.NA) {
							return empAcc + 8;
						}
						return empAcc;
					},
					0
				);
				return acc + empAbsenceHours;
			}, 0) || 0;

		return (
			<tr className={cls.summaryRow}>
				<td colSpan={3}>{t("Summary")}</td>
				{Array.from(
					{
						length: daysInMonth(
							Number(selectedMonth?.split("-")[0]),
							Number(selectedMonth?.split("-")[1]) - 1
						),
					},
					(_, i) => (
						<td key={i} />
					)
				)}
				<td>{totalWorkingDays}</td>
				<td>{totalWorkingHours}</td>
				<td>{totalOvertimeHours}</td>
				<td>{totalOvertimePS}</td>
				<td>{totalKomandirovkaHours}</td>
				<td>{totalAbsenceDaysReason}</td>
				<td>{totalAbsenceDaysNoReason}</td>
				<td>{totalIllnessDays}</td>
				<td>{totalAbsenceHours}</td>
			</tr>
		);
	};

	return (
		<DynamicReducerLoader reducers={reducers}>
			<div className={classNames(cls.employeeTimeTablePage, [className], {})}>
				<RowStack gap="32" justify="center" align="center">
					<TextHolder title={t("Employees time card")} />
					<DatePicker
						selected={startDate}
						onChange={handleDateChange}
						dateFormat="yyyy-MM"
						showMonthYearPicker
						className={cls.monthSelect}
					/>
				</RowStack>
				<table className={classNames(cls.timeCard, [className], {})}>
					<thead>
						<tr>
							<th>#</th>
							<th className={cls.fullNameColumn}>{t("Full Name")}</th>
							<th className={cls.verticalHeader}>{t("Hours / month")}</th>
							{renderDaysHeaders()}
							{renderSummaryHeaders()}
						</tr>
					</thead>
					<tbody>
						{renderRows()}
						{renderSummaryRow()}
					</tbody>
				</table>
			</div>
		</DynamicReducerLoader>
	);
};

export default memo(EmployeeTimeCardPage);
