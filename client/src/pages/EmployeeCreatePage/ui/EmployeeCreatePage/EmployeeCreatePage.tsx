import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './EmployeeCreatePage.module.scss';
import { useTranslation } from "react-i18next";
import {memo} from "react";
		
interface EmployeeCreatePageProps {
  className?: string;
}

const EmployeeCreatePage = (props: EmployeeCreatePageProps) => {
	const { className } = props;
	const { t } = useTranslation();
		return (
			<div 
				className={classNames(cls.employeeCreatePage, [className], {})}				  
			>
			{t("EmployeeCreatePage")}
			</div>			    
		);
};

export default memo(EmployeeCreatePage);