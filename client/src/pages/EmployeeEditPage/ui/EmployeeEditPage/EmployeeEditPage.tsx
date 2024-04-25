import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './EmployeeEditPage.module.scss';
import { useTranslation } from "react-i18next";
import {memo} from "react";
		
interface EmployeeEditPageProps {
  className?: string;
}

const EmployeeEditPage = (props: EmployeeEditPageProps) => {
	const { className } = props;
	const { t } = useTranslation();
		return (
			<div 
				className={classNames(cls.employeeEditPage, [className], {})}				  
			>
			{t("EmployeeEditPage")}
			</div>			    
		);
};

export default memo(EmployeeEditPage);