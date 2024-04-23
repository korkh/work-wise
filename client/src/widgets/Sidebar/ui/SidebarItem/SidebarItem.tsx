import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./SidebarItem.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { SidebarItemType } from "../../model/types/sidebar_types";
import { AppLink } from "@/shared/ui/AppLink";
import { Glyph } from "@/shared/ui/Glyph";

interface SidebarItemProps {
	item: SidebarItemType;
	collapsed: boolean;
}

export const SidebarItem = memo(function SidebarItem(props: SidebarItemProps) {
	const { item, collapsed } = props;
	const { t } = useTranslation();
	return (
		<AppLink
			to={item.path}
			className={classNames(cls.item, [], {
				[cls.collapsed]: collapsed,
			})}
			activeClassName={cls.active}
		>
			<Glyph SvgImage={item.Icon} />
			<span className={cls.link}>{t(item.text)}</span>
		</AppLink>
	);
});
