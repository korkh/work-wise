import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './DocumentDetailsPage.module.scss';
import { useTranslation } from "react-i18next";
import {memo} from "react";
		
interface DocumentDetailsPageProps {
  className?: string;
}

const DocumentDetailsPage = (props: DocumentDetailsPageProps) => {
	const { className } = props;
	const { t } = useTranslation();
		return (
			<div 
				className={classNames(cls.documentDetailsPage, [className], {})}				  
			>
			{t("DocumentDetailsPage")}
			</div>			    
		);
};

export default memo(DocumentDetailsPage);