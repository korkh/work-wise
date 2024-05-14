import cls from "./PayrollsPage.module.scss";
import { memo } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSearchParams } from "react-router-dom";
import { useInitEffect } from "@/shared/lib/hooks/useInitEffect/useInitEffect";
import {
	DynamicReducerLoader,
	ReducersList,
} from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { payrollsPageReducer } from "../../model/slices/payrollPageSlice";
import { initPayrollPage } from "../../model/services/initPayrollPage/initPayrollPage";
import { PayroLLsPageBaseList } from "../PayrollsPageBaseList/PayrollsPageBaseList";

const reducers: ReducersList = {
	payrollPage: payrollsPageReducer,
};

const PayrollsPage = () => {
	const dispatch = useAppDispatch();
	const [searchParams] = useSearchParams();

	useInitEffect(() => {
		dispatch(initPayrollPage(searchParams));
	});

	return (
		<DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
			<PayroLLsPageBaseList className={cls.list} />
		</DynamicReducerLoader>
	);
};

export default memo(PayrollsPage);
