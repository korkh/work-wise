import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ToolTipCell } from "@/shared/ui/Table/ui/ToolTipCell";

interface TimeCardSummaryHeadersProps {
	className?: string;
}

export const TimeCardSummaryHeaders = memo(function TimeCardSummaryHeaders({
	className,
}: TimeCardSummaryHeadersProps) {
	const { t } = useTranslation("timecards");
	return (
		<>
			<th className={className}>
				<ToolTipCell str={t("Working Days")} num={10} />
			</th>
			<th className={className}>
				<ToolTipCell str={t("Working Hours")} num={10} />
			</th>
			<th className={className}>{t("Overtime")}</th>
			<th className={className}>
				<ToolTipCell str={t("Overtime P & S")} num={10} />
			</th>
			<th className={className}>
				<ToolTipCell str={t("K")} num={10} />
			</th>
			<th className={className}>
				<ToolTipCell str={t("A")} num={10} />
			</th>
			<th className={className}>
				<ToolTipCell str={t("NA")} num={10} />
			</th>
			<th className={className}>
				<ToolTipCell str={t("PV")} num={10} />
			</th>
			<th className={className}>
				<ToolTipCell str={t("PB")} num={10} />
			</th>
			<th className={className}>{t("L")}</th>
			<th className={className}>{t("Absence")}</th>
		</>
	);
});
