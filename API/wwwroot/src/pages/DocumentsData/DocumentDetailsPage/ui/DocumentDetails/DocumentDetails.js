import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./DocumentDetails.module.scss";
import { memo } from "react";
import { DynamicReducerLoader, } from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { ColumnStack } from "@/shared/ui/Stack";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { useInitEffect } from "@/shared/lib/hooks/useInitEffect/useInitEffect";
import { DocumentDetailsError } from "../DocumentDetailsError";
import { documentDetailsReducer } from "../../../../../entities/Document/model/slice";
import { getDocumentDetailsError } from "@/entities/Document";
import { fetchDocumentByID } from "../../../../../entities/Document/model/services/fetchDocumentById";
import { DocumentDetailsCard } from "../DocumentDetailsCard";
const reducers = {
    documentDetails: documentDetailsReducer,
};
export const DocumentDetails = memo(function DocumentDetails(props) {
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
        content = _jsx(DocumentDetailsError, {});
    }
    else {
        content = _jsx(DocumentDetailsCard, { documentId: documentId });
    }
    return (_jsx(DynamicReducerLoader, { reducers: reducers, removeAfterUnmount: true, children: _jsx(ColumnStack, { gap: "16", max: true, align: "center", className: classNames(cls.documentDetails, [className]), children: content }) }));
});
