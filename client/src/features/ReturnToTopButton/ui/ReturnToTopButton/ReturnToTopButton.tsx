import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ReturnToTopButton.module.scss";
import { memo } from "react";
import { useReturnToTop } from "@/shared/lib/hooks/useReturnToTop/useReturnToTop";
import { Glyph } from "@/shared/ui/Glyph";
import ArrowsUpIcon from "@/shared/assets/icons/arrows-up.svg?react";

interface ReturnToTopButtonProps {
	className?: string;
}

export const ReturnToTopButton = memo(function ReturnToTopButton(
	props: ReturnToTopButtonProps
) {
	const { className } = props;
	const { isVisible, returnToTop } = useReturnToTop();

	const onCLick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div
			className={classNames(cls.ScrollToTopButton, [className], {
				[cls.visible]: isVisible,
			})}
			onClick={returnToTop}
		>
			<Glyph
				SvgImage={ArrowsUpIcon}
				clickable
				onClick={onCLick}
				width={32}
				height={32}
			/>
		</div>
	);
});
