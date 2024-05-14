import cls from "./DocumentsPage.module.scss";
import { memo } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSearchParams } from "react-router-dom";
import { useInitEffect } from "@/shared/lib/hooks/useInitEffect/useInitEffect";
import { initDocumentPage } from "../../model/services/initDocumentPage/initDocumentPage";
import {
	DynamicReducerLoader,
	ReducersList,
} from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { DocumentInfiniteList } from "../DocumentInfiniteList";
import { documentsPageReducer } from "../../model/slices/documentPageSlice";

const reducers: ReducersList = {
	documentPage: documentsPageReducer,
};

const DocumentsPage = () => {
	const dispatch = useAppDispatch();
	const [searchParams] = useSearchParams();

	useInitEffect(() => {
		dispatch(initDocumentPage(searchParams));
	});

	return (
		<DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
			<DocumentInfiniteList className={cls.list} />
		</DynamicReducerLoader>
	);
};

export default memo(DocumentsPage);
