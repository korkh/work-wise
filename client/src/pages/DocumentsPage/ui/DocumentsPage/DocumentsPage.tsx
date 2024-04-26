import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./DocumentsPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface DocumentsPageProps {
	className?: string;
}

const DocumentsPage = (props: DocumentsPageProps) => {
	const { className } = props;
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.documentsPage, [className], {})}>
			{t("DocumentsPage")}
		</div>
	);
};

export default memo(DocumentsPage);
