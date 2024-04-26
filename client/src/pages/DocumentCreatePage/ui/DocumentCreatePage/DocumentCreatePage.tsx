import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./DocumentCreatePage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface DocumentCreatePageProps {
	className?: string;
}

const DocumentCreatePage = (props: DocumentCreatePageProps) => {
	const { className } = props;
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.documentCreatePage, [className], {})}>
			{t("DocumentCreatePage")}
		</div>
	);
};

export default memo(DocumentCreatePage);
