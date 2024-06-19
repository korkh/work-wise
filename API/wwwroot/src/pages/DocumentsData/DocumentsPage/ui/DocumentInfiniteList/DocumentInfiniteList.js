import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import { memo, useEffect, useState } from "react";
import { TextHolder } from "@/shared/ui/TextHolder";
import { useSelector } from "react-redux";
import { getDocumentsPageIsLoading, getDocumentsPageError, } from "../../model/selectors/getDocumentsPageSelectors";
import { DocumentsList } from "../DocumentsList/DocumentsList";
import { selectAllDocuments } from "../../model/slices/documentPageSlice";
import { TableLoader } from "@/shared/ui/Table/ui/TableLoader";
export const DocumentInfiniteList = memo(function DocumentInfiniteList(props) {
    const { className } = props;
    const { t } = useTranslation();
    const documents = useSelector(selectAllDocuments);
    const isLoading = useSelector(getDocumentsPageIsLoading);
    const error = useSelector(getDocumentsPageError);
    const [documentsLoaded, setDocumentsLoaded] = useState(false);
    useEffect(() => {
        if (documents && documents.length > 0) {
            setDocumentsLoaded(true);
        }
    }, [documents]);
    if (error) {
        return _jsx(TextHolder, { text: t("Documents loading error") });
    }
    if (isLoading || !documentsLoaded) {
        return _jsx(TableLoader, {});
    }
    return (_jsx(DocumentsList, { "data-testid": "EmployeeList", documents: documents, isLoading: isLoading, className: className }));
});
