import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./EmployeeTimeCardPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useEffect, useState } from "react";
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
	getEmployeeTiemCardIsLoading,
	getEmployeeTiemCardSelectedMonth,
	getEmployeeTimeCardData,
	getEmployeeTimeCardForm,
} from "../../model/selectors/employeeTimeCard";
import { WorkingInits } from "../../model/consts/working_states";
import { TextHolder } from "@/shared/ui/TextHolder";
import { RowStack } from "@/shared/ui/Stack";
import { ToolTipCell } from "@/shared/ui/Table/ui/ToolTipCell";
import { fetchEmployeeTimeCardData } from "../../model/services/fetchEmployeeTimeCardData/fetchEmployeeTimeCardData";
import { saveEmployeeTimeCardData } from "../../model/services/saveEmployeeTimeCardData/saveEmployeeTimeCardData";
import { Button } from "@/shared/ui/Button";
import { TimeCardSummaryHeaders } from "../TimeCardSummaryHeaders";
import { TimeCardSummaryRow } from "../TimeCardSummaryRow";
import { TimeCardDaysHeader } from "../TimeCardDaysHeader";

interface EmployeeTimeCardPageProps {
	className?: string;
	isLoaded?: boolean;
}

const reducers: ReducersList = {
	employeeTimeCard: employeeTimeCardReducer,
};

const EmployeeTimeCardPage = (props: EmployeeTimeCardPageProps) => {
	const { className } = props;
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const data = useSelector(getEmployeeTimeCardData);
	const form = useSelector(getEmployeeTimeCardForm);
	const isLoading = useSelector(getEmployeeTiemCardIsLoading);
	const selectedMonth = useSelector(getEmployeeTiemCardSelectedMonth);
	const [startDate, setStartDate] = useState(new Date());
	const [holidays, setHolidays] = useState<number[] | undefined>([]);
	const [adjustedWorkingHours, setAdjustedWorkingHours] = useState<{
		[id: string]: number;
	}>({});

	const daysInMonth = (year: number, month: number) => {
		return new Date(year, month + 1, 0).getDate();
	};

	useEffect(() => {
		dispatch(fetchEmployeeTimeCardData());
	}, [dispatch]);

	useEffect(() => {
		const year = startDate.getFullYear();
		const month = startDate.getMonth() + 1;
		const monthString = `${year}-${String(month).padStart(2, "0")}`;
		dispatch(employeeTimeCardActions.setSelectedMonth(monthString));
	}, [startDate, dispatch]);

	useEffect(() => {
		const allHolidays = form
			?.map((emp) => emp.workingStates)
			.flat()
			.filter((ws) => ws.holiday)
			.map((ws) => ws.day);
		setHolidays(allHolidays);
		dispatch(employeeTimeCardActions.updateAvailableWorkingDays(allHolidays));
	}, [form, dispatch]);

	const handleDateChange = (date: Date) => {
		setStartDate(date);
	};

	const handleWorkingStateChange = (
		id: string,
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
			const newHolidays = prevHolidays?.includes(day)
				? prevHolidays.filter((d) => d !== day)
				: prevHolidays && [...prevHolidays, day];
			dispatch(employeeTimeCardActions.updateAvailableWorkingDays(newHolidays));
			return newHolidays;
		});
	};

	const incrementWorkingHours = () => {
		data &&
			setAdjustedWorkingHours((prev) =>
				data.reduce(
					(acc, emp) => {
						const currentHours =
							prev[emp.id] ?? emp.availableWorkingHoursPerMonth ?? 0;
						acc[emp.id] = currentHours + 1;
						return acc;
					},
					{} as { [id: string]: number }
				)
			);
	};

	const decrementWorkingHours = () => {
		data &&
			setAdjustedWorkingHours((prev) =>
				data.reduce(
					(acc, emp) => {
						const currentHours =
							prev[emp.id] ?? emp.availableWorkingHoursPerMonth ?? 0;
						acc[emp.id] = currentHours - 1;
						return acc;
					},
					{} as { [id: string]: number }
				)
			);
	};

	const saveChanges = useCallback(() => {
		if (form) {
			dispatch(saveEmployeeTimeCardData());
		}
	}, [dispatch, form]);

	const renderRows = () => {
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

			const [year, month] = selectedMonth.split("-").map(Number);
			const days = daysInMonth(year, month - 1);

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
					<Button onClick={saveChanges}>{t("Save")}</Button>
				</RowStack>
				<table className={classNames(cls.timeCard, [className], {})}>
					<thead>
						<tr>
							<th>#</th>
							<th className={cls.fullNameColumn}>{t("Full Name")}</th>
							<th className={cls.verticalHeader}>
								{t("Hrs / month ")}
								<>
									<button onClick={() => incrementWorkingHours()}>+</button>
									<button onClick={() => decrementWorkingHours()}>-</button>
								</>
							</th>
							<TimeCardDaysHeader
								weekEndClass={cls.weekend}
								holidayClass={cls.holiday}
								selectedMonth={selectedMonth}
								holidays={holidays}
								toggleHoliday={toggleHoliday}
							/>
							<TimeCardSummaryHeaders className={cls.verticalHeader} />
						</tr>
					</thead>
					<tbody>
						{renderRows()}
						<TimeCardSummaryRow
							selectedMonth={selectedMonth}
							form={form}
							className={cls.summaryRow}
						/>
					</tbody>
				</table>
			</div>
		</DynamicReducerLoader>
	);
};

export default memo(EmployeeTimeCardPage);
