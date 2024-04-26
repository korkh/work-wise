import { classNames } from 'shared/lib/utils/classNames/classNames';
import cls from './Payroll.module.scss';
import { useTranslation } from "react-i18next";
import {memo} from "react";
		
interface PayrollProps {
  className?: string;
}

const Payroll = (props: PayrollProps) => {
	const { className } = props;
	const { t } = useTranslation();
		return (
			<div 
				className={classNames(cls.payroll, [className], {})}				  
			>
			{t("Payroll")}
			</div>			    
		);
};

export default memo(Payroll);