import { Mods, classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./NavbarItem.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { AppLink } from "@/shared/ui/AppLink";
import { NavbarItemType } from "../../model/types/navbar_items";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { Dropdown } from "@/shared/ui/Popups/ui/Dropdown";

type DropDownProps = { content: string; href: string };

interface NavbarItemProps {
	className?: string;
	item: NavbarItemType;
	dropDownItems?: DropDownProps[];
	activeItem?: string | null;
	setActiveItem?: (path: string) => void;
}

export const NavbarItem = memo(function NavbarItem(props: NavbarItemProps) {
	const { className, item, dropDownItems, activeItem, setActiveItem } = props;
	const { t } = useTranslation();
	const isAuth = useSelector(getUserAuthData);

	if (item.authOnly && !isAuth) {
		return null;
	}

	const isActive =
		activeItem === item.path ||
		dropDownItems?.some((i) => i.href === location.pathname);

	const mods: Mods = {
		[cls.active]: isActive,
	};

	if (dropDownItems) {
		return (
			<Dropdown
				variant="clear"
				className={classNames("", [className], mods)}
				items={dropDownItems}
				trigger={<span className={cls.link}>{t(item.text)}</span>}
			/>
		);
	}

	return (
		<AppLink
			to={item.path}
			className={classNames(cls.item, [className], mods)}
			activeClassName={cls.active}
			onClick={() => setActiveItem && setActiveItem(item.path)}
		>
			<span className={cls.link}>{t(item.text)}</span>
		</AppLink>
	);
});
