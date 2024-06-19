import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./Hamburger.module.scss";

interface HamburgerProps {
	className?: string;
	isOpen?: boolean;
	toggle: () => void;
}

export const Hamburger = (props: HamburgerProps) => {
	const { className, isOpen, toggle } = props;
	return (
		<div className={classNames(cls.hamburger, [className])} onClick={toggle}>
			<div className={isOpen ? cls.bar1Open : cls.bar1}></div>
			<div className={isOpen ? cls.bar2Open : cls.bar2}></div>
			<div className={isOpen ? cls.bar3Open : cls.bar3}></div>
		</div>
	);
};
