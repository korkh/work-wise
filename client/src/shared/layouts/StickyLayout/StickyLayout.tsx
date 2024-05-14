import { memo, ReactElement } from "react";

import cls from "./StickyLayout.module.scss";
import { classNames } from "@/shared/lib/utils/classNames/classNames";

interface StickyContentLayoutProps {
	className?: string;
	top?: ReactElement;
	left?: ReactElement;
	content: ReactElement;
	right?: ReactElement;
}

export const StickyLayout = memo(function StickyContentLayout(
	props: StickyContentLayoutProps
) {
	const { className, content, top, left, right } = props;

	return (
		<div className={classNames(cls.mainLayout, [className], {})}>
			{top && <div className={cls.top}>{top}</div>}
			{left && <div className={cls.left}>{left}</div>}
			<div className={cls.content}>{content}</div>
			{right && <div className={cls.right}>{right}</div>}
		</div>
	);
});
