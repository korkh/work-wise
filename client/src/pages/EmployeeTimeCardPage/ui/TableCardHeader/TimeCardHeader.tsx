import { Mods, classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./TimeCardHeader.module.scss";
import { memo } from "react";
import { useTranslation } from "react-i18next";

interface TimeCardHeaderProps {
	className?: string;
	selectedMonth: string;
	toggleHoliday: (i: number) => void;
	holidays: number[] | undefined;
}

export const TimeCardHeader = memo(function TimeCardHeader(
	props: TimeCardHeaderProps
) {
	const { className, selectedMonth, toggleHoliday, holidays } = props;
	const { t } = useTranslation();

	if (!selectedMonth) return null;

	return (
		<>
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
					{renderDaysHeaders()}
					<TimeCardSummaryHeaders className={cls.verticalHeader} />
				</tr>
			</thead>
		</>
	);
});
