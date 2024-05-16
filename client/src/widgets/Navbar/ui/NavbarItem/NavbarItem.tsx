import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./NavbarItem.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { AppLink } from "@/shared/ui/AppLink";
import { NavbarItemType } from "../../model/types/navbar_items";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";

interface NavbarItemProps {
	className?: string;
	item: NavbarItemType;
}

export const NavbarItem = memo(function NavbarItem(props: NavbarItemProps) {
	const { className, item } = props;
	const { t } = useTranslation();
	const isAuth = useSelector(getUserAuthData);

	if (item.authOnly && !isAuth) {
		return null;
	}

	return (
		<AppLink
			to={item.path}
			className={classNames(cls.item, [className], {})}
			activeClassName={cls.active}
		>
			<span className={cls.link}>{t(item.text)}</span>
		</AppLink>
	);
});
