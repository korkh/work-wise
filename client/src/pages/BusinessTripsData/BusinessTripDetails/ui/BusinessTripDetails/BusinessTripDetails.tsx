import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from './BusinessTripDetails.module.scss';
import { useTranslation } from "react-i18next";
import {memo} from "react";
		
interface BusinessTripDetailsProps {
  className?: string;
}

const BusinessTripDetails = (props: BusinessTripDetailsProps) => {
	const { className } = props;
	const { t } = useTranslation();
		return (
			<div 
				className={classNames(cls.businessTripDetails, [className], {})}				  
			>
			{t("BusinessTripDetails")}
			</div>			    
		);
};

export default memo(BusinessTripDetails);