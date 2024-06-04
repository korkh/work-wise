import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ToolTipCell } from "@/shared/ui/Table/ui/ToolTipCell";

interface TimeCardSummaryHeadersProps {
	className?: string;
}

export const TimeCardSummaryHeaders = memo(function TimeCardSummaryHeaders({
	className,
}: TimeCardSummaryHeadersProps) {
	const { t } = useTranslation();
	return (
		<>
			<th className={className}>
				<ToolTipCell str={t("Working Days")} num={10} />
			</th>
			<th className={className}>
				<ToolTipCell str={t("Working Hours")} num={10} />
			</th>
			<th className={className}>{t("Overtime / hours")}</th>
			<th className={className}>
				<ToolTipCell str={t("Overtime P & S / hours")} num={10} />
			</th>
			<th className={className}>
				<ToolTipCell str={t("K / days")} num={10} />
			</th>
			<th className={className}>
				<ToolTipCell str={t("A / days")} num={10} />
			</th>
			<th className={className}>
				<ToolTipCell str={t("NA / days")} num={10} />
			</th>
			<th className={className}>
				<ToolTipCell str={t("PV / days")} num={10} />
			</th>
			<th className={className}>
				<ToolTipCell str={t("PB / days")} num={10} />
			</th>
			<th className={className}>{t("L / days")}</th>
			<th className={className}>{t("Absence Hours")}</th>
		</>
	);
});
