import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./DocumentsPage.module.scss";
import { memo, useCallback } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSearchParams } from "react-router-dom";
import { useInitEffect } from "@/shared/lib/hooks/useInitEffect/useInitEffect";
import { initDocumentPage } from "../../model/services/initDocumentPage/initDocumentPage";
import {
	DynamicReducerLoader,
	ReducersList,
} from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { PageContainer } from "@/widgets/PageContainer";
import { DocumentInfiniteList } from "../DocumentInfiniteList";
import { documentsPageReducer } from "../../model/slices/documentPageSlice";
import { fetchNextDocumentsPage } from "../../model/services/fetchNextDocumentsPage/fetchNextDocumentsPage";

interface DocumentsPageProps {
	className?: string;
}

const reducers: ReducersList = {
	documentPage: documentsPageReducer,
};

const DocumentsPage = (props: DocumentsPageProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const [searchParams] = useSearchParams();

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextDocumentsPage());
	}, [dispatch]);

	useInitEffect(() => {
		dispatch(initDocumentPage(searchParams));
	});

	return (
		<DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
			<PageContainer
				data-testid="EmployeesPage"
				onScrollEnd={onLoadNextPart}
				className={classNames(cls.employeesPage, [className], {})}
			>
				<DocumentInfiniteList className={cls.list} />
			</PageContainer>
		</DynamicReducerLoader>
	);
};

export default memo(DocumentsPage);
