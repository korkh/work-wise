import React, { useState, useCallback, useMemo } from "react";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./ListBox.module.scss";
import { DropdownDirection } from "@/shared/types/ui_components";
import { mapDirectionClass } from "../../styles/popup_consts";
import popupCls from "../../styles/popup.module.scss";
import { ColumnStack } from "../../../Stack";
import { Button } from "../../../Button";
import { Glyph } from "../../../Glyph";
import ArrowIcon from "@/shared/assets/icons/arrow-bottom.svg?react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface ListBoxItem<T extends string> {
	value: string;
	content: React.ReactNode;
	disabled?: boolean;
}

interface ListBoxProps<T extends string> {
	items?: ListBoxItem<T>[];
	className?: string;
	value?: T;
	defaultValue?: string;
	onChange: (value: T) => void;
	readonly?: boolean;
	direction?: DropdownDirection;
	label?: string;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
	const {
		className,
		items,
		value,
		defaultValue,
		onChange,
		readonly,
		direction = "bottom right",
		label,
	} = props;

	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = useCallback(() => {
		if (!readonly) {
			setIsOpen((prev) => !prev);
		}
	}, [readonly]);

	const handleSelect = useCallback(
		(selectedValue: string) => {
			onChange(selectedValue as T);
			setIsOpen(false);
		},
		[onChange]
	);

	const selectedItem = useMemo(() => {
		return items?.find((item) => item.value === value);
	}, [items, value]);

	const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

	return (
		<ColumnStack gap="4">
			{label && <span>{`${label}`}</span>}
			<div className={classNames(cls.ListBox, [className, popupCls.popup], {})}>
				<button
					className={cls.trigger}
					onClick={toggleOpen}
					disabled={readonly}
				>
					<Button
						variant="filled"
						disabled={readonly}
						bufferRight={<Glyph SvgImage={ArrowIcon} />}
					>
						{selectedItem?.content ?? defaultValue}
					</Button>
				</button>
				{isOpen && (
					<ul className={classNames(cls.options, optionsClasses, {})}>
						{items?.map((item) => (
							<li
								key={item.value}
								className={classNames(cls.item, [], {
									[popupCls.disabled]: item.disabled,
									[popupCls.selected]: item.value === value,
								})}
								onClick={() => !item.disabled && handleSelect(item.value)}
							>
								{item.content}
							</li>
						))}
					</ul>
				)}
			</div>
		</ColumnStack>
	);
}
