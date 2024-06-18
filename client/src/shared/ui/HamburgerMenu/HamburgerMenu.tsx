import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./HamburgerMenu.module.scss";
import { memo } from "react";

interface HamburgerMenuProps {
	className?: string;
	isOpen: boolean;
	toggle: () => void;
}

export const HamburgerMenu = memo(function HamburgerMenu(
	props: HamburgerMenuProps
) {
	const { className, isOpen, toggle } = props;
	return (
		<div
			className={classNames(cls.hamburgerMenu, [className], {})}
			onClick={toggle}
		>
			<div className={isOpen ? cls.bar1Open : cls.bar1}></div>
			<div className={isOpen ? cls.bar2Open : cls.bar2}></div>
			<div className={isOpen ? cls.bar3Open : cls.bar3}></div>
		</div>
	);
});
