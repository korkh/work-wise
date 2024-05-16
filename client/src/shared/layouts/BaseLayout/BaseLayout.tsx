import { memo, ReactElement } from "react";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./BaseLayout.module.scss";

interface BaseLayoutProps {
	className?: string;
	navbar: ReactElement;
	content: ReactElement;
}

export const BaseLayout = (props: BaseLayoutProps) => {
	const { className, content, navbar } = props;

	return (
		<div className={classNames(cls.baseLayout, [className], {})}>
			<header className={cls.navbar}>{navbar}</header>
			<main className={cls.content}>{content}</main>
		</div>
	);
};

export default memo(BaseLayout);
