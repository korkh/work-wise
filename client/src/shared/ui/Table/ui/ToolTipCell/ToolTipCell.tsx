import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./ToolTipCell.module.scss";
import { memo } from "react";
import { truncateString } from "@/shared/lib/utils/table/truncateString/truncateString";

interface ToolTipCellProps {
	className?: string;
	str: string;
	num: number;
}

export const ToolTipCell = memo(function ToolTipCell(props: ToolTipCellProps) {
	const { className, str, num } = props;
	return (
		<div className={classNames(cls.cellTooltip, [className], {})}>
			<span>{truncateString(str, num)}</span>
			{String(str).length > num && (
				<span className={cls.tooltipText}>{str}</span>
			)}
		</div>
	);
});
