import { classNames } from 'shared/lib/utils/classNames/classNames';
import cls from './Document.module.scss';
import { useTranslation } from "react-i18next";
import {memo} from "react";
		
interface DocumentProps {
  className?: string;
}

const Document = (props: DocumentProps) => {
	const { className } = props;
	const { t } = useTranslation();
		return (
			<div 
				className={classNames(cls.document, [className], {})}				  
			>
			{t("Document")}
			</div>			    
		);
};

export default memo(Document);