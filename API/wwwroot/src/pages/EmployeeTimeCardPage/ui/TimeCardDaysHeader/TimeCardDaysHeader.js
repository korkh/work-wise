import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { memo } from "react";
import { daysInMonth } from "../../model/consts/consts";
export const TimeCardDaysHeader = memo(function TimeCardDaysHeader(props) {
    const { selectedMonth, holidays, toggleHoliday, weekEndClass, holidayClass } = props;
    if (!selectedMonth)
        return null;
    const [year, month] = selectedMonth.split("-").map(Number);
    const days = daysInMonth(year, month - 1);
    return Array.from({ length: days }, (_, i) => {
        const day = new Date(year, month - 1, i + 1).getDay();
        const isWeekend = day === 0 || day === 6;
        const isHoliday = holidays?.includes(i + 1);
        return (_jsx("th", { className: classNames("", [], {
                [weekEndClass]: isWeekend,
                [holidayClass]: isHoliday,
            }), onClick: () => toggleHoliday(i + 1), children: i + 1 }, i + 1));
    });
});
