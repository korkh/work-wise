import { useTranslation } from "react-i18next";
import { memo, useEffect, useState } from "react";
import { TextHolder } from "@/shared/ui/TextHolder";
import { useSelector } from "react-redux";
import {
	getDocumentsPageIsLoading,
	getDocumentsPageError,
} from "../../model/selectors/getDocumentsPageSelectors";
import { getDocuments } from "../../model/slices/documentPageSlice";
import { DocumentsList } from "../DocumentsList/DocumentsList";

interface DocumentInfiniteListProps {
	className?: string;
}

export const DocumentInfiniteList = memo(function EmployeeInfiniteList(
	props: DocumentInfiniteListProps
) {
	const { className } = props;
	const { t } = useTranslation();

	const documents = useSelector(getDocuments.selectAll);
	const isLoading = useSelector(getDocumentsPageIsLoading);
	const error = useSelector(getDocumentsPageError);

	const [documentsLoaded, setDocumentsLoaded] = useState(false);

	useEffect(() => {
		if (documents) {
			setDocumentsLoaded(true);
		}
	}, [documents]);

	if (error || !documentsLoaded) {
		return <TextHolder text={t("Documents loading error")} />;
	}

	return (
		<DocumentsList
			data-testid="EmployeeList"
			documents={documents}
			isLoading={isLoading}
			className={className}
		/>
	);
});
