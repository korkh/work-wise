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
	getEmployeeTiemCardError,
	getEmployeeTiemCardIsLoading,
	getEmployeeTiemCardSelectedMonth,
	getEmployeeTimeCardData,
	getEmployeeTimeCardForm,
} from "../../model/selectors/employeeTimeCard";
import { TextHolder } from "@/shared/ui/TextHolder";
import { RowStack } from "@/shared/ui/Stack";
import { fetchEmployeeTimeCardData } from "../../model/services/fetchEmployeeTimeCardData/fetchEmployeeTimeCardData";
import { saveEmployeeTimeCardData } from "../../model/services/saveEmployeeTimeCardData/saveEmployeeTimeCardData";
import { Button } from "@/shared/ui/Button";
import { TimeCardSummaryHeaders } from "../TimeCardSummaryHeaders";
import { TimeCardSummaryRow } from "../TimeCardSummaryRow";
import { TimeCardDaysHeader } from "../TimeCardDaysHeader";
import { TimeCardRows } from "../TableCardRows";
import { TimeCardLoader } from "../TimeCardLoader";
import { useForceUpdate } from "@/shared/lib/forceUpdateRender/foreceUpdateRender";

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
	const error = useSelector(getEmployeeTiemCardError);
	const selectedMonth = useSelector(getEmployeeTiemCardSelectedMonth);
	const [startDate, setStartDate] = useState(new Date());
	const [holidays, setHolidays] = useState<number[] | undefined>([]);
	const [adjustedWorkingHours, setAdjustedWorkingHours] = useState<{
		[id: string]: number;
	}>({});

	const forceUpdate = useForceUpdate();

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
			forceUpdate();
		}
	}, [dispatch, forceUpdate, form]);

	let content;

	if (isLoading) {
		content = <TimeCardLoader />;
	} else if (error) {
		content = (
			<TextHolder
				align="center"
				variant="error"
				title={t("TimeCard loading error")}
				style={{ marginTop: "10vh" }}
			/>
		);
	} else if (!form || form.length === 0) {
		content = (
			<TextHolder
				align="center"
				variant="accent"
				title={t("No data available. Try to choose another date!")}
				style={{ marginTop: "10vh" }}
			/>
		);
	} else {
		content = (
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
					<TimeCardRows
						form={form}
						selectedMonth={selectedMonth}
						handleWorkingStateChange={handleWorkingStateChange}
						adjustedWorkingHours={adjustedWorkingHours}
					/>
					<TimeCardSummaryRow
						selectedMonth={selectedMonth}
						form={form}
						className={cls.summaryRow}
					/>
				</tbody>
			</table>
		);
	}

	return (
		<DynamicReducerLoader reducers={reducers}>
			<div className={classNames(cls.employeeTimeTablePage, [className])}>
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
				{content}
			</div>
		</DynamicReducerLoader>
	);
};

export default memo(EmployeeTimeCardPage);
