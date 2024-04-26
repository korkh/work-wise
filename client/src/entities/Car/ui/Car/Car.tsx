import { classNames } from 'shared/lib/utils/classNames/classNames';
import cls from './Car.module.scss';
import { useTranslation } from "react-i18next";
import {memo} from "react";
		
interface CarProps {
  className?: string;
}

const Car = (props: CarProps) => {
	const { className } = props;
	const { t } = useTranslation();
		return (
			<div 
				className={classNames(cls.car, [className], {})}				  
			>
			{t("Car")}
			</div>			    
		);
};

export default memo(Car);