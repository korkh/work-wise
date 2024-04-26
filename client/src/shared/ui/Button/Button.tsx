import {
	Classes,
	Mods,
	classNames,
} from "../../lib/utils/classNames/classNames";
import cls from "./Button.module.scss";
import {
	ButtonHTMLAttributes,
	ForwardedRef,
	ReactNode,
	forwardRef,
} from "react";

export type ButtonVariant = "clear" | "outline" | "filled";

export type ButtonColor = "normal" | "success" | "error" | "info";

export type ButtonSize = "s" | "m" | "l" | "xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: ButtonVariant;
	square?: boolean;
	size?: ButtonSize;
	color?: ButtonColor;
	disabled?: boolean;
	maxWidth?: boolean;
	bufferLeft?: ReactNode;
	bufferRight?: ReactNode;
	children?: ReactNode;
}

export const Button = forwardRef(function Button(
	props: ButtonProps,
	ref: ForwardedRef<HTMLButtonElement>
) {
	const {
		className,
		children,
		variant = "outline",
		square,
		disabled,
		maxWidth,
		size = "m",
		bufferLeft,
		bufferRight,
		color = "normal",
		...otherProps
	} = props;

	const mods: Mods = {
		[cls.square]: square,
		[cls.disabled]: disabled,
		[cls.maxWidth]: maxWidth,
		[cls.withBuffer]: Boolean(bufferLeft) || Boolean(bufferRight),
	};

	const additionalClasses: Classes = [
		className,
		cls[variant],
		cls[size],
		cls[color],
	];

	return (
		<button
			ref={ref}
			className={classNames(cls.button, additionalClasses, mods)}
			type="button"
			disabled={disabled}
			{...otherProps}
		>
			<div className={cls.bufferLeft}>{bufferLeft}</div>
			{children}
			<div className={cls.bufferRight}>{bufferRight}</div>
		</button>
	);
});
