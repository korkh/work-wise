import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { classNames, Mods } from "@/shared/lib/utils/classNames/classNames";
import cls from "./Flex.module.scss";

export type FlexJustifyProps = "start" | "center" | "end" | "between";
export type FlexAlignProps = "start" | "center" | "end";
export type FlexDirectionProps = "row" | "column";
export type FlexWrapProps = "nowrap" | "wrap";
export type FlexGapProps =
	| "4"
	| "6"
	| "8"
	| "10"
	| "12"
	| "14"
	| "16"
	| "18"
	| "20"
	| "22"
	| "24"
	| "32"
	| "50";

const justifyClasses: Record<FlexJustifyProps, string> = {
	start: cls.justifyStart,
	center: cls.justifyCenter,
	end: cls.justifyEnd,
	between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlignProps, string> = {
	start: cls.alignStart,
	center: cls.alignCenter,
	end: cls.alignEnd,
};

const directionClasses: Record<FlexDirectionProps, string> = {
	row: cls.directionRow,
	column: cls.directionColumn,
};

const gapClasses: Record<FlexGapProps, string> = {
	4: cls.gap4,
	6: cls.gap6,
	8: cls.gap8,
	10: cls.gap10,
	12: cls.gap12,
	14: cls.gap14,
	16: cls.gap16,
	18: cls.gap18,
	20: cls.gap20,
	22: cls.gap22,
	24: cls.gap24,
	32: cls.gap32,
	50: cls.gap50,
};

type DivProps = DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>;

export interface FlexProps extends DivProps {
	className?: string;
	children: ReactNode;
	justify?: FlexJustifyProps;
	align?: FlexAlignProps;
	direction: FlexDirectionProps;
	wrap?: FlexWrapProps;
	gap?: FlexGapProps;
	max?: boolean;
}

export const Flex = (props: FlexProps) => {
	const {
		className,
		children,
		justify = "start",
		align = "center",
		direction = "row",
		wrap = "nowrap",
		gap,
		max,
		...otherProps
	} = props;

	const classes = [
		className,
		justifyClasses[justify],
		alignClasses[align],
		directionClasses[direction],
		cls[wrap],
		gap && gapClasses[gap],
	];

	const mods: Mods = {
		[cls.max]: max,
	};

	return (
		<div className={classNames(cls.Flex, classes, mods)} {...otherProps}>
			{children}
		</div>
	);
};
