import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { useTranslation } from "react-i18next";
import {memo} from "react";
		
interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = (props: NotFoundPageProps) => {
	const { className } = props;
	const { t } = useTranslation();
		return (
			<div 
				className={classNames(cls.notFoundPage, [className], {})}				  
			>
			{t("NotFoundPage")}
			</div>			    
		);
};

export default memo(NotFoundPage);