import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PayrollDeletePage.module.scss';
import { useTranslation } from "react-i18next";
import {memo} from "react";
		
interface PayrollDeletePageProps {
  className?: string;
}

const PayrollDeletePage = (props: PayrollDeletePageProps) => {
	const { className } = props;
	const { t } = useTranslation();
		return (
			<div 
				className={classNames(cls.payrollDeletePage, [className], {})}				  
			>
			{t("PayrollDeletePage")}
			</div>			    
		);
};

export default memo(PayrollDeletePage);