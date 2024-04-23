import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./SideToolbarScroll.module.scss";
import { memo } from "react";
import { RowStack } from "@/shared/ui/Stack";
import { ReturnToTopButton } from "@/features/ReturnToTopButton";

interface SideToolbarScrollProps {
	className?: string;
}

export const SideToolbarScroll = memo(function SideToolbarScroll(
	props: SideToolbarScrollProps
) {
	const { className } = props;
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
