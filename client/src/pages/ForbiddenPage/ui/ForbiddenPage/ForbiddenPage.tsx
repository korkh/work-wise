import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./ForbiddenPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface ForbiddenPageProps {
	className?: string;
}

const ForbiddenPage = (props: ForbiddenPageProps) => {
	const { className } = props;
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.forbiddenPage, [className], {})}>
			{t("ForbiddenPage")}
		</div>
	);
};

export default memo(ForbiddenPage);
