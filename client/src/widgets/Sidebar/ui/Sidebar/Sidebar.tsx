import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { memo, useMemo, useState } from "react";
import { useSidebarItems } from "../../model/selectors/getSidebarItems";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { ColumnStack } from "@/shared/ui/Stack";
import { Glyph } from "@/shared/ui/Glyph";
import ArrowIcon from "@/shared/assets/icons/arrow-bottom.svg?react";
import { AppLogo } from "@/shared/ui/AppLogo";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";

interface SidebarProps {
	className?: string;
}

export const Sidebar = memo(function Sidebar(props: SidebarProps) {
	const { className } = props;
	const [collapsed, setCollapsed] = useState(false);
	const sidebarItemsList = useSidebarItems();

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	const itemsList = useMemo(
		() =>
			sidebarItemsList.map((item) => (
				<SidebarItem item={item} collapsed={collapsed} key={item.path} />
			)),
		[collapsed, sidebarItemsList]
	);
	return (
		<aside
			data-testid="sidebar"
			className={classNames(cls.sidebar, [className], {
				[cls.collapsed]: collapsed,
			})}
		>
			<AppLogo size={collapsed ? 0 : 150} className={cls.appLogo} />
			<ColumnStack role="navigation" gap="16" className={cls.items}>
				{itemsList}
			</ColumnStack>
			<Glyph
				data-testid="sidebar-toggle"
				onClick={onToggle}
				className={cls.collapseBtn}
				SvgImage={ArrowIcon}
				clickable
			/>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				{/* <LangSwitcher short={collapsed} className={cls.lang} /> */}
			</div>
		</aside>
	);
});
