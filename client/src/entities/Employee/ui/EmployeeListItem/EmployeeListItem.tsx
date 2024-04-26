import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from './EmployeeListItem.module.scss';
import { useTranslation } from "react-i18next";
import {memo} from "react";
		
interface EmployeeListItemProps {
  className?: string;
}

export const EmployeeListItem = memo(function EmployeeListItem(props: EmployeeListItemProps) {
	const { className } = props;
	const { t } = useTranslation();
		return (
			<div 
				className={classNames(cls.employeeListItem, [className], {})}				  
			>
			{t("EmployeeListItem")}
			</div>			    
		);
});