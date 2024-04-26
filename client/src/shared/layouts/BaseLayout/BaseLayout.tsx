import { memo, ReactElement } from "react";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./BaseLayout.module.scss";

interface BaseLayoutProps {
	className?: string;
	header: ReactElement;
	content: ReactElement;
	sidebar: ReactElement;
	toolbar?: ReactElement;
}

export const BaseLayout = (props: BaseLayoutProps) => {
	const { className, content, toolbar, header, sidebar } = props;

	return (
		<div className={classNames(cls.baseLayout, [className], {})}>
			<div className={cls.content}>{content}</div>
			<div className={cls.sidebar}>{sidebar}</div>
			<div className={cls.rightbar}>
				<div className={cls.header}>{header}</div>
				<div className={cls.toolbar}>{toolbar}</div>
			</div>
		</div>
	);
};

export default memo(BaseLayout);
