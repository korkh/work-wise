import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./EmployeeTimeCardPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DynamicReducerLoader, } from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { employeeTimeCardActions, employeeTimeCardReducer, } from "../../model/slices/employeeTimeCardSlice";
import { useSelector } from "react-redux";
import { getEmployeeTiemCardError, getEmployeeTiemCardIsLoading, getEmployeeTiemCardSelectedMonth, getEmployeeTimeCardData, getEmployeeTimeCardForm, } from "../../model/selectors/employeeTimeCard";
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
import { ToolTipCell } from "@/shared/ui/Table/ui/ToolTipCell";
const reducers = {
    employeeTimeCard: employeeTimeCardReducer,
};
const EmployeeTimeCardPage = (props) => {
    const { className } = props;
    const { t } = useTranslation("timecards");
    const dispatch = useAppDispatch();
    const data = useSelector(getEmployeeTimeCardData);
    const form = useSelector(getEmployeeTimeCardForm);
    const isLoading = useSelector(getEmployeeTiemCardIsLoading);
    const error = useSelector(getEmployeeTiemCardError);
    const selectedMonth = useSelector(getEmployeeTiemCardSelectedMonth);
    const [startDate, setStartDate] = useState(new Date());
    const [holidays, setHolidays] = useState([]);
    const [adjustedWorkingHours, setAdjustedWorkingHours] = useState({});
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
    const handleDateChange = (date) => {
        setStartDate(date);
    };
    const handleWorkingStateChange = (id, day, state) => {
        const parsedState = isNaN(Number(state)) ? state : Number(state);
        dispatch(employeeTimeCardActions.updateEmployeeState({
            id,
            day,
            state: parsedState,
        }));
    };
    const toggleHoliday = (day) => {
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
            setAdjustedWorkingHours((prev) => data.reduce((acc, emp) => {
                const currentHours = prev[emp.id] ?? emp.availableWorkingHoursPerMonth ?? 0;
                acc[emp.id] = currentHours + 1;
                return acc;
            }, {}));
    };
    const decrementWorkingHours = () => {
        data &&
            setAdjustedWorkingHours((prev) => data.reduce((acc, emp) => {
                const currentHours = prev[emp.id] ?? emp.availableWorkingHoursPerMonth ?? 0;
                acc[emp.id] = currentHours - 1;
                return acc;
            }, {}));
    };
    const saveChanges = useCallback(() => {
        if (form) {
            dispatch(saveEmployeeTimeCardData());
            forceUpdate();
        }
    }, [dispatch, forceUpdate, form]);
    let content;
    if (isLoading) {
        content = _jsx(TimeCardLoader, {});
    }
    else if (error) {
        content = (_jsx(TextHolder, { align: "center", variant: "error", title: t("TimeCard loading error"), style: { marginTop: "10vh" } }));
    }
    else if (!form || form.length === 0) {
        content = (_jsx(TextHolder, { align: "center", variant: "accent", title: t("No data available. Try to choose another date!"), style: { marginTop: "10vh" } }));
    }
    else {
        content = (_jsxs("table", { className: classNames(cls.timeCard, [className], {}), children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "#" }), _jsx("th", { className: cls.fullNameColumn, children: t("Full Name") }), _jsxs("th", { className: cls.verticalHeader, children: [_jsx(ToolTipCell, { str: t("Hrs in month"), num: 10 }), _jsxs(_Fragment, { children: [_jsx("button", { onClick: () => incrementWorkingHours(), children: "+" }), _jsx("button", { onClick: () => decrementWorkingHours(), children: "-" })] })] }), _jsx(TimeCardDaysHeader, { weekEndClass: cls.weekend, holidayClass: cls.holiday, selectedMonth: selectedMonth, holidays: holidays, toggleHoliday: toggleHoliday }), _jsx(TimeCardSummaryHeaders, { className: cls.verticalHeader })] }) }), _jsxs("tbody", { children: [_jsx(TimeCardRows, { form: form, selectedMonth: selectedMonth, handleWorkingStateChange: handleWorkingStateChange, adjustedWorkingHours: adjustedWorkingHours }), _jsx(TimeCardSummaryRow, { selectedMonth: selectedMonth, form: form, className: cls.summaryRow })] })] }));
    }
    return (_jsx(DynamicReducerLoader, { reducers: reducers, children: _jsxs("div", { className: classNames(cls.employeeTimeTablePage, [className]), children: [_jsxs(RowStack, { gap: "32", justify: "center", align: "center", children: [_jsx(TextHolder, { title: t("Employees time card") }), _jsx(DatePicker, { selected: startDate, onChange: handleDateChange, dateFormat: "yyyy-MM", showMonthYearPicker: true, className: cls.monthSelect }), _jsx(Button, { onClick: saveChanges, children: t("Save") })] }), content] }) }));
};
export default memo(EmployeeTimeCardPage);
