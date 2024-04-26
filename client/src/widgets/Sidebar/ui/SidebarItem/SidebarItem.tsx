import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./SidebarItem.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { SidebarItemType } from "../../model/types/sidebar_types";
import { AppLink } from "@/shared/ui/AppLink";
import { Glyph } from "@/shared/ui/Glyph";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";

interface SidebarItemProps {
	item: SidebarItemType;
	collapsed: boolean;
}

export const SidebarItem = memo(function SidebarItem(props: SidebarItemProps) {
	const { item, collapsed } = props;
	const { t } = useTranslation();

	const isAuth = useSelector(getUserAuthData);

	if (item.authOnly && !isAuth) {
		return null;
	}
	return (
		<AppLink
			to={item.path}
			className={classNames(cls.item, [], {
				[cls.collapsed]: collapsed,
			})}
			activeClassName={cls.active}
		>
			<Glyph width={32} height={32} SvgImage={item.Icon} />
			{!collapsed && (
				<span className={classNames(cls.link, [], {})}>{t(item.text)}</span>
			)}
		</AppLink>
	);
});
