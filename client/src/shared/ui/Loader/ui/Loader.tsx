import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./Loader.module.scss";
import { PropsWithChildren } from "react";

interface LoaderProps {
	className?: string;
}

export function Loader(props: PropsWithChildren<LoaderProps>) {
	const { className, ...otherProps } = props;
	return (
		<div className={classNames(cls.lds, [className], {})} {...otherProps}>
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
		</div>
	);
}
