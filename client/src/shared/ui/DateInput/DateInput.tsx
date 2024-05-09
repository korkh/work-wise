import React, { memo } from "react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./DateInput.module.scss";
import { TextHolder } from "../TextHolder";
import { RowStack } from "../Stack";
import { FlexGapProps, FlexJustifyProps } from "../Stack/Flex/Flex";

interface DateInputProps extends Omit<ReactDatePickerProps, "onChange"> {
	className?: string;
	selected?: Date | null;
	onChange?: (
		date: Date | null | undefined,
		event: React.SyntheticEvent<unknown, Event> | undefined
	) => void;
	label?: string;
	readonly?: boolean;
	gap?: FlexGapProps;
	width?: string;
	justify?: FlexJustifyProps;
}

export const DateInput: React.FC<DateInputProps> = memo(function DateInput({
	className,
	label,
	onChange,
	readonly,
	gap = "8",
	width,
	justify = "center",
	...props
}) {
	const dynamicWidth = width ? { width } : {};
	return (
		<RowStack max gap={gap} justify={justify}>
			<TextHolder text={label} />
			<div
				style={dynamicWidth}
				className={classNames(cls.dateInput, [className], {
					[cls.readonly]: readonly,
				})}
			>
				<DatePicker
					className={classNames(cls.input)}
					onChange={onChange || ((_, _event) => {})}
					{...props}
				/>
			</div>
		</RowStack>
	);
});
