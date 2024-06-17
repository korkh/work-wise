import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./Dropdown.module.scss";
import { ReactNode, memo, useEffect, useRef, useState } from "react";
import { DropdownDirection } from "@/shared/types/ui_components";
import { mapDirectionClass } from "../../styles/popup_consts";
import popupCls from "../../styles/popup.module.scss";
import { Button, ButtonVariant } from "@/shared/ui/Button";
import { AppLink } from "@/shared/ui/AppLink";

export interface DropdownItem {
	disabled?: boolean;
	content?: ReactNode;
	onClick?: () => void;
	href?: string;
}

interface DropdownProps {
	className?: string;
	items: DropdownItem[];
	direction?: DropdownDirection;
	trigger: ReactNode;
	variant?: ButtonVariant;
}

export const Dropdown = memo(function Dropdown(props: DropdownProps) {
	const {
		className,
		trigger,
		items,
		direction = "bottom right",
		variant,
	} = props;
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const menuClasses = [mapDirectionClass[direction], popupCls.menu];

	const toggleDropdown = () => {
		setIsOpen((prevState) => !prevState);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node)
		) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div
			className={classNames(cls.dropdown, [className, popupCls.popup], {})}
			ref={dropdownRef}
		>
			<Button
				variant={variant}
				onClick={toggleDropdown}
				className={cls.trigger}
			>
				{trigger}
			</Button>
			{isOpen && (
				<div className={classNames(cls.menu, menuClasses, {})}>
					{items.map((item, index) => {
						const content = ({ active }: { active: boolean }) => (
							<button
								type="button"
								disabled={item.disabled}
								onClick={item.onClick}
								className={classNames(cls.item, [], {
									[popupCls.active]: active,
								})}
							>
								{item.content}
							</button>
						);

						if (item.href) {
							return (
								<AppLink
									to={item.href}
									{...(item.disabled ? { disabled: true } : {})}
									key={`dropdown-key-${index}`}
								>
									{content({ active: true })}
								</AppLink>
							);
						}

						return (
							<div
								key={`dropdown-key-${index}`}
								{...(item.disabled ? { disabled: true } : {})}
							>
								{content({ active: true })}
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
});
