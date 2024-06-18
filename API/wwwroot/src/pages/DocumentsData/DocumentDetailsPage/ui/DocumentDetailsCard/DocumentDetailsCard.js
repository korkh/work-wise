import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { getDocumentDetailsError, getDocumentDetailsIsLoading, getDocumentForm, getDocumentReadonly, getDocumentValidateErrors, } from "@/entities/Document";
import { DynamicReducerLoader, } from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { ValidateDocumentError } from "@/entities/Document";
import { useInitEffect } from "@/shared/lib/hooks/useInitEffect/useInitEffect";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { ColumnStack } from "@/shared/ui/Stack";
import { TextHolder } from "@/shared/ui/TextHolder";
import { documentDetailsActions, documentDetailsReducer, } from "../../../../../entities/Document/model/slice";
import { fetchDocumentByID } from "../../../../../entities/Document/model/services/fetchDocumentById";
import { DocumentDetailsCardHeader } from "../DocumentDetailsCardHeader";
import { DocumentDetailsCardContent } from "../DocumentDetailsCardContent";
const reducers = {
    documentDetails: documentDetailsReducer,
};
export const DocumentDetailsCard = memo(function DocumentDetailsCard(props) {
    const { className, documentId } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const formData = useSelector(getDocumentForm);
    const isLoading = useSelector(getDocumentDetailsIsLoading);
    const error = useSelector(getDocumentDetailsError);
    const readonly = useSelector(getDocumentReadonly);
    const validateErrors = useSelector(getDocumentValidateErrors);
    const validateErrorTranslates = {
        [ValidateDocumentError.INCORRECT_DOCUMENT_DATA]: t("errors.incorrect_document_data"),
        [ValidateDocumentError.NO_DATA]: t("errors.no_data_available"),
        [ValidateDocumentError.SERVER_ERROR]: t("errors.server_error"),
    };
    useInitEffect(() => {
        if (documentId) {
            dispatch(fetchDocumentByID(documentId));
        }
    });
    const onChangeDocumentTitle = useCallback((title) => {
        dispatch(documentDetailsActions.updateDocument({ title: title || "" }));
    }, [dispatch]);
    const onChangeDocumentIssueDate = useCallback((date) => {
        dispatch(documentDetailsActions.updateDocument({ issueDate: date || null }));
    }, [dispatch]);
    const onChangeDocumentExpirationDate = useCallback((date) => {
        dispatch(documentDetailsActions.updateDocument({ expirationDate: date || null }));
    }, [dispatch]);
    return (_jsx(DynamicReducerLoader, { reducers: reducers, children: _jsxs(ColumnStack, { gap: "8", max: true, className: classNames("", [className], {}), children: [_jsx(DocumentDetailsCardHeader, {}), validateErrors?.length &&
                    validateErrors.map((err) => (_jsx(TextHolder, { "data-testid": "EditableProfileCard.Error", variant: "error", text: validateErrorTranslates[err] }, err))), _jsx(DocumentDetailsCardContent, { data: formData, "data-testid": "DocuemtDetailsCard", isLoading: isLoading, error: error, readonly: readonly, onChangeDocumentTitle: onChangeDocumentTitle, onChangeDocumentIssueDate: onChangeDocumentIssueDate, onChangeDocumentExpirationDate: onChangeDocumentExpirationDate })] }) }));
});
