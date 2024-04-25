import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileEditPage.module.scss';
import { useTranslation } from "react-i18next";
import {memo} from "react";
		
interface ProfileEditPageProps {
  className?: string;
}

const ProfileEditPage = (props: ProfileEditPageProps) => {
	const { className } = props;
	const { t } = useTranslation();
		return (
			<div 
				className={classNames(cls.profileEditPage, [className], {})}				  
			>
			{t("ProfileEditPage")}
			</div>			    
		);
};

export default memo(ProfileEditPage);