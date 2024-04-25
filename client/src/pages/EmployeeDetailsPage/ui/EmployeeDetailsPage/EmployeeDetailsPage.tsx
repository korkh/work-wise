import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './EmployeeDetailsPage.module.scss';
import { useTranslation } from "react-i18next";
import {memo} from "react";
		
interface EmployeeDetailsPageProps {
  className?: string;
}

const EmployeeDetailsPage = (props: EmployeeDetailsPageProps) => {
	const { className } = props;
	const { t } = useTranslation();
		return (
			<div 
				className={classNames(cls.employeeDetailsPage, [className], {})}				  
			>
			{t("EmployeeDetailsPage")}
			</div>			    
		);
};

export default memo(EmployeeDetailsPage);