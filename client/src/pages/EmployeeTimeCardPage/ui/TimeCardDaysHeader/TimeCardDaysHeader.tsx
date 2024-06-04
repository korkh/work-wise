import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { memo } from "react";
import { daysInMonth } from "../../model/consts/consts";

interface TimeCardDaysHeaderProps {
	selectedMonth: string;
	holidays?: number[];
	toggleHoliday: (day: number) => void;
	weekEndClass: string;
	holidayClass: string;
}

export const TimeCardDaysHeader = memo(function TimeCardDaysHeader(
	props: TimeCardDaysHeaderProps
) {
	const { selectedMonth, holidays, toggleHoliday, weekEndClass, holidayClass } =
		props;
	if (!selectedMonth) return null;

	const [year, month] = selectedMonth.split("-").map(Number);
	const days = daysInMonth(year, month - 1);

	return Array.from({ length: days }, (_, i) => {
		const day = new Date(year, month - 1, i + 1).getDay();
		const isWeekend = day === 0 || day === 6;
		const isHoliday = holidays?.includes(i + 1);
		return (
			<th
				key={i + 1}
				className={classNames("", [], {
					[weekEndClass]: isWeekend,
					[holidayClass]: isHoliday,
				})}
				onClick={() => toggleHoliday(i + 1)}
			>
				{i + 1}
			</th>
		);
	});
});
