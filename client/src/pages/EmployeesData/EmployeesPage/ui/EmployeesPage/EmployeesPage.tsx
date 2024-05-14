import cls from "./EmployeesPage.module.scss";
import { memo } from "react";
import {
	DynamicReducerLoader,
	ReducersList,
} from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { employeesPageReducer } from "../../model/slices/employeesPageSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSearchParams } from "react-router-dom";
import { useInitEffect } from "@/shared/lib/hooks/useInitEffect/useInitEffect";
import { initEmployeesPage } from "../../model/services/initEmployeesPage/initEmployeesPage";
import { EmployeeInfiniteList } from "../EmployeeInfiniteList/EmployeeInfiniteList";

const reducers: ReducersList = {
	employeePage: employeesPageReducer,
};

const EmployeesPage = memo(function EmployeesPage() {
	const dispatch = useAppDispatch();
	const [searchParams] = useSearchParams();

	useInitEffect(() => {
		dispatch(initEmployeesPage(searchParams));
	});

	return (
		<DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
			<EmployeeInfiniteList className={cls.list} />
		</DynamicReducerLoader>
	);
});

export default EmployeesPage;
