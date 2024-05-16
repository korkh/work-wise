import AppSvg from "@/shared/assets/icons/app-image.svg?react";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { memo } from "react";
import { RowStack } from "../Stack";

import cls from "./AppLogo.module.scss";

interface AppLogoProps {
	className?: string;
	size?: number;
	width?: number;
	height?: number;
}

export const AppLogo = memo(function AppLogo({
	className,
	size = 50,
	width,
	height,
}: AppLogoProps) {
	return (
		<RowStack
			max
			justify="center"
			className={classNames(cls.appLogoWrapper, [className], {})}
		>
			<AppSvg
				width={width ? width : size}
				height={height ? height : size}
				color="black"
				className={cls.appLogo}
			/>
			<div className={cls.gradientBig} />
			<div className={cls.gradientSmall} />
		</RowStack>
	);
});
