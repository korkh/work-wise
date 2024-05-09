import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./DocumentEditPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface DocumentEditPageProps {
	className?: string;
}

const DocumentEditPage = (props: DocumentEditPageProps) => {
	const { className } = props;
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.documentEditPage, [className], {})}>
			{t("DocumentEditPage")}
		</div>
	);
};

export default memo(DocumentEditPage);
