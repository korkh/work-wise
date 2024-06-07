import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./DocumentDetails.module.scss";
import { memo } from "react";
import {
	DynamicReducerLoader,
	ReducersList,
} from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { ColumnStack } from "@/shared/ui/Stack";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { useInitEffect } from "@/shared/lib/hooks/useInitEffect/useInitEffect";
import { DocumentDetailsError } from "../DocumentDetailsError";
import { documentDetailsReducer } from "../../../../../entities/Document/model/slice";
import { getDocumentDetailsError } from "@/entities/Document";
import { fetchDocumentByID } from "../../../../../entities/Document/model/services/fetchDocumentById";
import { DocumentDetailsCard } from "../DocumentDetailsCard";

interface DocumentDetailsProps {
	className?: string;
	documentId: string;
}

const reducers: ReducersList = {
	documentDetails: documentDetailsReducer,
};

export const DocumentDetails = memo(function DocumentDetails(
	props: DocumentDetailsProps
) {
	const { className, documentId } = props;

	const dispatch = useAppDispatch();
	const error = useSelector(getDocumentDetailsError);

	useInitEffect(() => {
		if (__PROJECT__ !== "storybook") {
			dispatch(fetchDocumentByID(documentId));
		}
	});

	let content;

	if (error) {
		content = <DocumentDetailsError />;
	} else {
		content = <DocumentDetailsCard documentId={documentId} />;
	}

	return (
		<DynamicReducerLoader reducers={reducers} removeAfterUnmount>
			<ColumnStack
				gap="16"
				max
				align="center"
				className={classNames(cls.documentDetails, [className])}
			>
				{content}
			</ColumnStack>
		</DynamicReducerLoader>
	);
});
