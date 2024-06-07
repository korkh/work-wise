import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import {
	EmployeeDocument,
	getDocumentDetailsError,
	getDocumentDetailsIsLoading,
	getDocumentForm,
	getDocumentReadonly,
	getDocumentValidateErrors,
} from "@/entities/Document";
import {
	DynamicReducerLoader,
	ReducersList,
} from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { ValidateDocumentError } from "@/entities/Document";
import { useInitEffect } from "@/shared/lib/hooks/useInitEffect/useInitEffect";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { ColumnStack } from "@/shared/ui/Stack";
import { TextHolder } from "@/shared/ui/TextHolder";
import {
	documentDetailsActions,
	documentDetailsReducer,
} from "../../../../../entities/Document/model/slice";
import { fetchDocumentByID } from "../../../../../entities/Document/model/services/fetchDocumentById";
import { DocumentDetailsCardHeader } from "../DocumentDetailsCardHeader";
import { DocumentDetailsCardContent } from "../DocumentDetailsCardContent";

export interface DocumentDetailsCardProps {
	className?: string;
	data?: EmployeeDocument;
	error?: string;
	isLoading?: boolean;
	readonly?: boolean;
	documentId?: string;
	onChangeDocumentTitle?: (value?: string) => void;
	onChangeDocumentIssueDate?: (
		value?: Date | null,
		event?: React.SyntheticEvent<unknown, Event>
	) => void;
	onChangeDocumentExpirationDate?: (
		value?: Date | null,
		event?: React.SyntheticEvent<unknown, Event>
	) => void;
}

const reducers: ReducersList = {
	documentDetails: documentDetailsReducer,
};

export const DocumentDetailsCard = memo(function DocumentDetailsCard(
	props: DocumentDetailsCardProps
) {
	const { className, documentId } = props;
	const { t } = useTranslation();

	const dispatch = useAppDispatch();
	const formData = useSelector(getDocumentForm);
	const isLoading = useSelector(getDocumentDetailsIsLoading);
	const error = useSelector(getDocumentDetailsError);
	const readonly = useSelector(getDocumentReadonly);
	const validateErrors = useSelector(getDocumentValidateErrors);

	const validateErrorTranslates = {
		[ValidateDocumentError.INCORRECT_DOCUMENT_DATA]: t(
			"errors.incorrect_document_data"
		),
		[ValidateDocumentError.NO_DATA]: t("errors.no_data_available"),
		[ValidateDocumentError.SERVER_ERROR]: t("errors.server_error"),
	};

	useInitEffect(() => {
		if (documentId) {
			dispatch(fetchDocumentByID(documentId));
		}
	});

	const onChangeDocumentTitle = useCallback(
		(title?: string) => {
			dispatch(documentDetailsActions.updateDocument({ title: title || "" }));
		},
		[dispatch]
	);

	const onChangeDocumentIssueDate = useCallback(
		(date?: Date | null) => {
			dispatch(
				documentDetailsActions.updateDocument({ issueDate: date || null })
			);
		},
		[dispatch]
	);

	const onChangeDocumentExpirationDate = useCallback(
		(date?: Date | null) => {
			dispatch(
				documentDetailsActions.updateDocument({ expirationDate: date || null })
			);
		},
		[dispatch]
	);

	return (
		<DynamicReducerLoader reducers={reducers}>
			<ColumnStack gap="8" max className={classNames("", [className], {})}>
				<DocumentDetailsCardHeader />
				{validateErrors?.length &&
					validateErrors.map((err) => (
						<TextHolder
							data-testid="EditableProfileCard.Error"
							key={err}
							variant={"error"}
							text={validateErrorTranslates[err]}
						/>
					))}
				<DocumentDetailsCardContent
					data={formData}
					data-testid="DocuemtDetailsCard"
					isLoading={isLoading}
					error={error}
					readonly={readonly}
					onChangeDocumentTitle={onChangeDocumentTitle}
					onChangeDocumentIssueDate={onChangeDocumentIssueDate}
					onChangeDocumentExpirationDate={onChangeDocumentExpirationDate}
				/>
			</ColumnStack>
		</DynamicReducerLoader>
	);
});
