import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './EmployeeDeletePage.module.scss';
import { useTranslation } from "react-i18next";
import {memo} from "react";
		
interface EmployeeDeletePageProps {
  className?: string;
}

const EmployeeDeletePage = (props: EmployeeDeletePageProps) => {
	const { className } = props;
	const { t } = useTranslation();
		return (
			<div 
				className={classNames(cls.employeeDeletePage, [className], {})}				  
			>
			{t("EmployeeDeletePage")}
			</div>			    
		);
};

export default memo(EmployeeDeletePage);