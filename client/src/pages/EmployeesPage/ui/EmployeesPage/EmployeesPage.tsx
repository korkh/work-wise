import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './EmployeesPage.module.scss';
import { useTranslation } from "react-i18next";
import {memo} from "react";
		
interface EmployeesPageProps {
  className?: string;
}

const EmployeesPage = (props: EmployeesPageProps) => {
	const { className } = props;
	const { t } = useTranslation();
		return (
			<div 
				className={classNames(cls.employeesPage, [className], {})}				  
			>
			{t("EmployeesPage")}
			</div>			    
		);
};

export default memo(EmployeesPage);