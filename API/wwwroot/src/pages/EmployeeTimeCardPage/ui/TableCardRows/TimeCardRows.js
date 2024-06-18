import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./TimeCardRows.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { daysInMonth } from "../../model/consts/consts";
import { ToolTipCell } from "@/shared/ui/Table/ui/ToolTipCell";
import { TextHolder } from "@/shared/ui/TextHolder";
import { WorkingInits } from "../../model/consts/working_states";
export const TimeCardRows = memo(function TimeCardRows(props) {
    const { form, selectedMonth, handleWorkingStateChange, adjustedWorkingHours, } = props;
    const { t } = useTranslation();
    if (!form || form.length === 0)
        return (_jsx("tr", { children: _jsx("td", { colSpan: 10, children: _jsx(TextHolder, { title: t("No data available") }) }) }));
    return form.map((timecard, index) => {
        const workingStatesMap = timecard.workingStates.reduce((acc, ws) => {
            acc[ws.day] = ws.state;
            return acc;
        }, {});
        const totalWorkingDays = timecard.workingStates.filter((ws) => typeof ws.state === "number" && ws.state > 0).length;
        const totalWorkingHours = timecard.workingStates.reduce((acc, ws) => {
            const parsedState = typeof ws.state === "string" ? Number(ws.state) : ws.state;
            if (!isNaN(parsedState)) {
                return acc + parsedState;
            }
            return acc;
        }, 0);
        const overtimeHours = timecard.workingStates.reduce((acc, ws) => {
            const parsedHours = typeof ws.state === "string" ? Number(ws.state) : ws.state;
            if (!isNaN(parsedHours) && parsedHours > 8) {
                return acc + (parsedHours - 8);
            }
            return acc;
        }, 0);
        const overtimePS = timecard.workingStates.reduce((acc, ws) => {
            if (typeof ws.state === "string" &&
                (ws.state.startsWith("P/") ||
                    ws.state.startsWith("PK/") ||
                    ws.state.startsWith("S/") ||
                    ws.state.startsWith("SK/"))) {
                const hours = parseInt(ws.state.split("/")[1], 10);
                return acc + (isNaN(hours) ? 0 : hours);
            }
            return acc;
        }, 0);
        const komandirovkaDays = timecard.workingStates.filter((ws) => typeof ws.state === "string" &&
            (ws.state.startsWith("K") ||
                ws.state.startsWith("PK") ||
                ws.state.startsWith("SK"))).length;
        const illnessDays = timecard.workingStates.filter((ws) => ws.state === WorkingInits.L).length;
        const absenceDaysReason = timecard.workingStates.filter((ws) => ws.state === WorkingInits.A).length;
        const notPaidHolidays = timecard.workingStates.filter((ws) => ws.state === WorkingInits.NA).length;
        const idleDays = timecard.workingStates.filter((ws) => ws.state === WorkingInits.PV).length;
        const truancyDays = timecard.workingStates.filter((ws) => ws.state === WorkingInits.PB).length;
        const totalAbsenceHours = timecard.workingStates.reduce((acc, ws) => {
            if ((typeof ws.state === "string" && ws.state === WorkingInits.NA) ||
                ws.state === WorkingInits.PB) {
                return acc + 8;
            }
            return acc;
        }, 0);
        const [year, month] = selectedMonth.split("-").map(Number);
        const days = daysInMonth(year, month - 1);
        const availableWorkingHours = adjustedWorkingHours[timecard.id] ??
            timecard.availableWorkingHoursPerMonth;
        return (_jsxs("tr", { children: [_jsx("td", { children: index + 1 }), _jsx("td", { className: cls.fullNameColumn, children: _jsx(ToolTipCell, { str: `${timecard.employeeFirstName} ${timecard.employeeLastName}`, num: 20 }) }), _jsx("td", { children: availableWorkingHours }), Array.from({ length: days }, (_, day) => {
                    const date = new Date(year, month - 1, day + 1);
                    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                    const isHoliday = timecard.workingStates.some((ws) => ws.day === day + 1 && ws.holiday);
                    const defaultValue = isWeekend ? "P" : isHoliday ? "S" : "";
                    return (_jsx("td", { className: classNames(cls.inputCell, [], {
                            [cls.wEnd]: isWeekend,
                            [cls.hDay]: isHoliday,
                        }), children: _jsx("input", { type: "text", value: workingStatesMap[day + 1] || defaultValue, onChange: (e) => {
                                const value = e.target.value.toUpperCase();
                                handleWorkingStateChange(timecard.id, day + 1, isNaN(Number(value)) ? value : Number(value));
                            }, className: classNames("", [], {
                                [cls.wEnd]: isWeekend,
                                [cls.hDay]: isHoliday,
                            }) }) }, day + 1));
                }), _jsx("td", { children: totalWorkingDays }), _jsx("td", { children: totalWorkingHours }), _jsx("td", { children: overtimeHours }), _jsx("td", { children: overtimePS }), _jsx("td", { children: komandirovkaDays }), _jsx("td", { children: absenceDaysReason }), _jsx("td", { children: notPaidHolidays }), _jsx("td", { children: idleDays }), _jsx("td", { children: truancyDays }), _jsx("td", { children: illnessDays }), _jsx("td", { children: totalAbsenceHours })] }, timecard.id));
    });
});
