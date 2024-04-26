import cls from "./EmployeesPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import {
	DynamicReducerLoader,
	ReducersList,
} from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { employeesPageReducer } from "../../model/slices/employeesPageSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSearchParams } from "react-router-dom";
import { fetchNextEmployeesPage } from "../../model/services/fetchNextEmployeesPage/fetchNextEmployeesPage";
import { useInitEffect } from "@/shared/lib/hooks/useInitEffect/useInitEffect";
import { initEmployeesPage } from "../../model/services/initEmployeesPage/initEmployeesPage";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { EmployeeInfiniteList } from "../EmployeeInfiniteList/EmployeeInfiniteList";
import { PageContainer } from "@/widgets/PageContainer";

interface EmployeesPageProps {
	className?: string;
}

const reducers: ReducersList = {
	employeePage: employeesPageReducer,
};

const EmployeesPage = (props: EmployeesPageProps) => {
	const { className } = props;
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const [searchParams] = useSearchParams();

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextEmployeesPage());
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
};

export default memo(EmployeesPage);
