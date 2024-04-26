import { memo } from "react";

import { classNames } from "@/shared/lib/utils/classNames/classNames";

import cls from "./Overlay.module.scss";

interface OverlayProps {
	className?: string;
	onClick?: () => void;
}

export const Overlay = memo(function Overlay(props: OverlayProps) {
	const { className, onClick } = props;

	return (
		<div
			onClick={onClick}
			className={classNames(cls.Overlay, [className], {})}
		/>
	);
});
