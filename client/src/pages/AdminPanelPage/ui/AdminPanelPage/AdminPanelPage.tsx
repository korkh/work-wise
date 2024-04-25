import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AdminPanelPage.module.scss';
import { useTranslation } from "react-i18next";
import {memo} from "react";
		
interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = (props: AdminPanelPageProps) => {
	const { className } = props;
	const { t } = useTranslation();
		return (
			<div 
				className={classNames(cls.adminPanelPage, [className], {})}				  
			>
			{t("AdminPanelPage")}
			</div>			    
		);
};

export default memo(AdminPanelPage);