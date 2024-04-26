import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./PageLoader.module.scss";
import { PropsWithChildren, memo } from "react";
import { Loader } from "@/shared/ui/Loader";

interface PageLoaderProps {
	className?: string;
}

export const PageLoader = memo(function PageLoader(
	props: PropsWithChildren<PageLoaderProps>
) {
	const { className, ...otherProps } = props;
	return (
		<div
			className={classNames(cls.pageloader, [className], {})}
			{...otherProps}
		>
			<Loader />
		</div>
	);
});
