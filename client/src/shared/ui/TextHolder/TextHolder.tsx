import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

export type TextHolderVariant = "primary" | "error" | "accent";

export type TextHolderAlign = "right" | "left" | "center";

export type TextHolderSize = "s" | "m" | "l";

interface TextHolderProps {
	className?: string;
	title?: string;
	text?: string;
	variant?: TextHolderVariant;
	align?: TextHolderAlign;
	size?: TextHolderSize;
	bold?: boolean;
	"data-testid"?: string;
}

type HeaderTagType = "h1" | "h2" | "h3";

const mapSizeToClass: Record<TextHolderSize, string> = {
	s: cls.size_s,
	m: cls.size_m,
	l: cls.size_l,
};

const mapSizeToHeaderTag: Record<TextHolderSize, HeaderTagType> = {
	s: "h3",
	m: "h2",
	l: "h1",
};

export const TextHolder = memo(function TextHolder(props: TextHolderProps) {
	const {
		className,
		text,
		title,
		variant = "primary",
		align = "left",
		size = "m",
		bold,
		"data-testid": dataTestId = "Text",
	} = props;

	const HeaderTag = mapSizeToHeaderTag[size];
	const sizeClass = mapSizeToClass[size];

	const additionalClasses = [className, cls[variant], cls[align], sizeClass];

	return (
		<div
			className={classNames(cls.Text, additionalClasses, { [cls.bold]: bold })}
		>
			{title && (
				<HeaderTag className={cls.title} data-testid={`${dataTestId}.Header`}>
					{title}
				</HeaderTag>
			)}
			{text && (
				<p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
					{text}
				</p>
			)}
		</div>
	);
});
