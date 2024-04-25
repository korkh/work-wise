import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PayrollDetailsPage.module.scss';
import { useTranslation } from "react-i18next";
import {memo} from "react";
		
interface PayrollDetailsPageProps {
  className?: string;
}

const PayrollDetailsPage = (props: PayrollDetailsPageProps) => {
	const { className } = props;
	const { t } = useTranslation();
		return (
			<div 
				className={classNames(cls.payrollDetailsPage, [className], {})}				  
			>
			{t("PayrollDetailsPage")}
			</div>			    
		);
};

export default memo(PayrollDetailsPage);