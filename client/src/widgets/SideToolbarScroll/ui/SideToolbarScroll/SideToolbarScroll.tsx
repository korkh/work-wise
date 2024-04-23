import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./SideToolbarScroll.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { RowStack } from "@/shared/ui/Stack";

interface SideToolbarScrollProps {
	className?: string;
}

export const SideToolbarScroll = memo(function SideToolbarScroll(
	props: SideToolbarScrollProps
) {
	const { className } = props;
	const { t } = useTranslation();
	return (
		<RowStack
			justify="center"
			align="center"
			max
			className={classNames(cls.sideToolbarScroll, [className], {})}
		>
			<ReturnToTopButton />
		</RowStack>
	);
});
