import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { WorkingInits } from "../../model/consts/working_states";
export const TimeCardSummaryRow = memo(function TimeCardSummaryRow(props) {
    const { className, form, selectedMonth } = props;
    const { t } = useTranslation("timecards");
    const daysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };
    const totalWorkingDays = form?.reduce((acc, emp) => {
        const empWorkingDays = emp.workingStates.filter((ws) => typeof ws.state === "number" && ws.state > 0).length;
        return acc + empWorkingDays;
    }, 0) || 0;
    const totalWorkingHours = form?.reduce((acc, emp) => {
        const empWorkingHours = emp.workingStates.reduce((empAcc, ws) => {
            const parsedState = typeof ws.state === "string" ? Number(ws.state) : ws.state;
            if (!isNaN(parsedState)) {
                return empAcc + parsedState;
            }
            return empAcc;
        }, 0);
        return acc + empWorkingHours;
    }, 0) || 0;
    const totalOvertimeHours = totalWorkingHours > 160 ? totalWorkingHours - 160 : 0;
    const totalOvertimePS = form?.reduce((acc, emp) => {
        const empOvertimePS = emp.workingStates.reduce((empAcc, ws) => {
            if (typeof ws.state === "string" &&
                (ws.state.startsWith("P/") || ws.state.startsWith("S/"))) {
                const hours = parseInt(ws.state.split("/")[1], 10);
                return empAcc + (isNaN(hours) ? 0 : hours);
            }
            return empAcc;
        }, 0);
        return acc + empOvertimePS;
    }, 0) || 0;
    const totalKomandirovkaDays = form?.reduce((acc, emp) => {
        const empKomandirovkaDays = emp.workingStates.filter((ws) => typeof ws.state === "string" &&
            (ws.state.startsWith("K") ||
                ws.state.startsWith("PK") ||
                ws.state.startsWith("SK"))).length;
        return acc + empKomandirovkaDays;
    }, 0) || 0;
    const totalIllnessDays = form?.reduce((acc, emp) => {
        const empIllnessDays = emp.workingStates.filter((ws) => ws.state === WorkingInits.L).length;
        return acc + empIllnessDays;
    }, 0) || 0;
    const totalAbsenceDaysReason = form?.reduce((acc, emp) => {
        const empAbsenceDaysReason = emp.workingStates.filter((ws) => ws.state === WorkingInits.A).length;
        return acc + empAbsenceDaysReason;
    }, 0) || 0;
    const totalNotPaidHolidays = form?.reduce((acc, emp) => {
        const empNotPaidHolidays = emp.workingStates.filter((ws) => ws.state === WorkingInits.NA).length;
        return acc + empNotPaidHolidays;
    }, 0) || 0;
    const totalIddleDays = form?.reduce((acc, emp) => {
        const empIdleDays = emp.workingStates.filter((ws) => ws.state === WorkingInits.PV).length;
        return acc + empIdleDays;
    }, 0) || 0;
    const totalTruancyDays = form?.reduce((acc, emp) => {
        const empTruancyDays = emp.workingStates.filter((ws) => ws.state === WorkingInits.PB).length;
        return acc + empTruancyDays;
    }, 0) || 0;
    const totalAbsenceHours = form?.reduce((acc, emp) => {
        const empAbsenceHours = emp.workingStates.reduce((empAcc, ws) => {
            if ((typeof ws.state === "string" && ws.state === WorkingInits.NA) ||
                ws.state === WorkingInits.PB) {
                return empAcc + 8;
            }
            return empAcc;
        }, 0);
        return acc + empAbsenceHours;
    }, 0) || 0;
    return (_jsxs("tr", { className: className, children: [_jsx("td", { colSpan: 3, children: t("Summary") }), Array.from({
                length: daysInMonth(Number(selectedMonth?.split("-")[0]), Number(selectedMonth?.split("-")[1]) - 1),
            }, (_, i) => (_jsx("td", {}, i))), _jsx("td", { children: totalWorkingDays }), _jsx("td", { children: totalWorkingHours }), _jsx("td", { children: totalOvertimeHours }), _jsx("td", { children: totalOvertimePS }), _jsx("td", { children: totalKomandirovkaDays }), _jsx("td", { children: totalAbsenceDaysReason }), _jsx("td", { children: totalNotPaidHolidays }), _jsx("td", { children: totalIddleDays }), _jsx("td", { children: totalTruancyDays }), _jsx("td", { children: totalIllnessDays }), _jsx("td", { children: totalAbsenceHours })] }));
});
