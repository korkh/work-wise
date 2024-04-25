import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PayrollsPage.module.scss';
import { useTranslation } from "react-i18next";
import {memo} from "react";
		
interface PayrollsPageProps {
  className?: string;
}

const PayrollsPage = (props: PayrollsPageProps) => {
	const { className } = props;
	const { t } = useTranslation();
		return (
			<div 
				className={classNames(cls.payrollsPage, [className], {})}				  
			>
			{t("PayrollsPage")}
			</div>			    
		);
};

export default memo(PayrollsPage);