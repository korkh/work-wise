import { ElementType, HTMLAttributes, memo, ReactNode } from "react";

import cls from "./Section.module.scss";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { mapPaddingToClass } from "./maps/sectionMaps";
import {
	SectionVariant,
	SectionPadding,
	SectionBorder,
} from "./types/sectionTypes";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	children: ReactNode;
	variant?: SectionVariant;
	max?: boolean;
	padding?: SectionPadding;
	border?: SectionBorder;
	fullHeight?: boolean;
	as?: ElementType;
}

export const Section = memo(function Card(props: SectionProps) {
	const {
		className,
		children,
		variant = "normal",
		max,
		padding = "8",
		border = "normal",
		fullHeight,
		as: Component = "div",
		...otherProps
	} = props;

	const paddingClass = mapPaddingToClass[padding];

	return (
		<Component
			className={classNames(
				cls.section,
				[className, cls[variant], cls[paddingClass], cls[border]],
				{
					[cls.max]: max,
					[cls.fullHeight]: fullHeight,
				}
			)}
			{...otherProps}
		>
			{children}
		</Component>
	);
});
