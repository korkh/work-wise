import cls from "./EmployeesPage.module.scss";
import { memo, useCallback } from "react";
import {
	DynamicReducerLoader,
	ReducersList,
} from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { employeesPageReducer } from "../../model/slices/employeesPageSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSearchParams } from "react-router-dom";
import { useInitEffect } from "@/shared/lib/hooks/useInitEffect/useInitEffect";
import { initEmployeesPage } from "../../model/services/initEmployeesPage/initEmployeesPage";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { EmployeeInfiniteList } from "../EmployeeInfiniteList/EmployeeInfiniteList";
import { PageContainer } from "@/widgets/PageContainer";
import { fetchNextDocumentsPage } from "../../../../../pages/DocumentsData/DocumentsPage/model/services/fetchNextDocumentsPage/fetchNextDocumentsPage";

interface EmployeesPageProps {
	className?: string;
}

const reducers: ReducersList = {
	employeePage: employeesPageReducer,
};

const EmployeesPage = memo(function EmployeesPage(props: EmployeesPageProps) {
	const { className } = props;
	const dispatch = useAppDispatch();
	const [searchParams] = useSearchParams();

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextDocumentsPage());
	}, [dispatch]);

	useInitEffect(() => {
		dispatch(initEmployeesPage(searchParams));
	});

	return (
		<DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
			<PageContainer
				data-testid="EmployeesPage"
				onScrollEnd={onLoadNextPart}
				className={classNames(cls.employeesPage, [className], {})}
			>
				<EmployeeInfiniteList className={cls.list} />
			</PageContainer>
		</DynamicReducerLoader>
	);
});

export default EmployeesPage;
