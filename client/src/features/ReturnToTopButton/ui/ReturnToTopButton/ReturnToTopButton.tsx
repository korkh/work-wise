import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ReturnToTopButton.module.scss';
import { useTranslation } from "react-i18next";
import {memo} from "react";
		
interface ReturnToTopButtonProps {
  className?: string;
}

const ReturnToTopButton = (props: ReturnToTopButtonProps) => {
	const { className } = props;
	const { t } = useTranslation();
		return (
			<div 
				className={classNames(cls.returnToTopButton, [className], {})}				  
			>
			{t("ReturnToTopButton")}
			</div>			    
		);
};

export default memo(ReturnToTopButton);