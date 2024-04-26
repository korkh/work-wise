import React, {
	InputHTMLAttributes,
	memo,
	ReactNode,
	useEffect,
	useRef,
	useState,
} from "react";
import { classNames, Mods } from "@/shared/lib/utils/classNames/classNames";
import cls from "./Input.module.scss";
import { TextHolder } from "../TextHolder";
import { RowStack } from "../Stack";

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"value" | "onChange" | "readOnly" | "size"
>;

type InputSize = "s" | "m" | "l";

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string | number;
	label?: string;
	onChange?: (value: string) => void;
	autofocus?: boolean;
	readonly?: boolean;
	bufferLeft?: ReactNode;
	bufferRight?: ReactNode;
	size?: InputSize;
}

export const Input = memo(function Input(props: InputProps) {
	const {
		className,
		value,
		onChange,
		type = "text",
		placeholder,
		autofocus,
		readonly,
		bufferLeft,
		bufferRight,
		label,
		size = "m",
		...otherProps
	} = props;
	const ref = useRef<HTMLInputElement>(null);
	const [isFocused, setIsFocused] = useState(false);

	useEffect(() => {
		if (autofocus) {
			setIsFocused(true);
			ref.current?.focus();
		}
	}, [autofocus]);

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	const onBlur = () => {
		setIsFocused(false);
	};

	const onFocus = () => {
		setIsFocused(true);
	};

	const mods: Mods = {
		[cls.readonly]: readonly,
		[cls.focused]: isFocused,
		[cls.withBuffer]: Boolean(bufferLeft) || Boolean(bufferRight),
	};

	const input = (
		<div className={classNames(cls.inputWrapper, [className, cls[size]], mods)}>
			<div className={cls.bufferLeft}>{bufferLeft}</div>
			<input
				ref={ref}
				type={type}
				value={value}
				onChange={onChangeHandler}
				className={cls.input}
				onFocus={onFocus}
				onBlur={onBlur}
				readOnly={readonly}
				placeholder={placeholder}
				{...otherProps}
			/>
			<div className={cls.bufferRight}>{bufferRight}</div>
		</div>
	);

	if (label) {
		return (
			<RowStack max gap="8">
				<TextHolder text={label} />
				{input}
			</RowStack>
		);
	}

	return input;
});
