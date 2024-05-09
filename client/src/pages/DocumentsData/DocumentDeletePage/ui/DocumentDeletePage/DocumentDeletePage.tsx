import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./DocumentDeletePage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface DocumentDeletePageProps {
	className?: string;
}

const DocumentDeletePage = (props: DocumentDeletePageProps) => {
	const { className } = props;
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.documentDeletePage, [className], {})}>
			{t("DocumentDeletePage")}
		</div>
	);
};

export default memo(DocumentDeletePage);
