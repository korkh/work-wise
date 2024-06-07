import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./DocumentDetailsPage.module.scss";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { PageContainer } from "@/widgets/PageContainer";
import { DocumentDetails } from "../DocumentDetails/DocumentDetails";

interface DocumentDetailsPageProps {
	className?: string;
}

const DocumentDetailsPage = (props: DocumentDetailsPageProps) => {
	const { className } = props;
	const { id } = useParams<{ id: string }>();
	return (
		<PageContainer
			className={classNames(cls.documentDetailsPage, [className], {})}
		>
			{id && <DocumentDetails documentId={id} />}
		</PageContainer>
	);
};

export default memo(DocumentDetailsPage);
