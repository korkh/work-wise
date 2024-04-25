import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ManagerPanelPage.module.scss';
import { useTranslation } from "react-i18next";
import {memo} from "react";
		
interface ManagerPanelPageProps {
  className?: string;
}

const ManagerPanelPage = (props: ManagerPanelPageProps) => {
	const { className } = props;
	const { t } = useTranslation();
		return (
			<div 
				className={classNames(cls.managerPanelPage, [className], {})}				  
			>
			{t("ManagerPanelPage")}
			</div>			    
		);
};

export default memo(ManagerPanelPage);