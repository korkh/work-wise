import { jsx as _jsx } from "react/jsx-runtime";
import cls from "./DocumentsPage.module.scss";
import { memo } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSearchParams } from "react-router-dom";
import { useInitEffect } from "@/shared/lib/hooks/useInitEffect/useInitEffect";
import { initDocumentPage } from "../../model/services/initDocumentPage/initDocumentPage";
import { DynamicReducerLoader, } from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { DocumentInfiniteList } from "../DocumentInfiniteList";
import { documentsPageReducer } from "../../model/slices/documentPageSlice";
const reducers = {
    documentPage: documentsPageReducer,
};
const DocumentsPage = () => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    useInitEffect(() => {
        dispatch(initDocumentPage(searchParams));
    });
    return (_jsx(DynamicReducerLoader, { reducers: reducers, removeAfterUnmount: false, children: _jsx(DocumentInfiniteList, { className: cls.list }) }));
};
export default memo(DocumentsPage);
