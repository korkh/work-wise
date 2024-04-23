import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useTranslation } from "react-i18next";
import {memo} from "react";
		
interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(function Sidebar(props: SidebarProps) {
	const { className } = props;
	const { t } = useTranslation();
		return (
			<div 
				className={classNames(cls.sidebar, [className], {})}				  
			>
			{t("Sidebar")}
			</div>			    
		);
});