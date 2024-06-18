import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSearchParams } from "react-router-dom";
import { useInitEffect } from "@/shared/lib/hooks/useInitEffect/useInitEffect";
import { DynamicReducerLoader, } from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { payrollsPageReducer } from "../../model/slices/payrollPageSlice";
import { initPayrollPage } from "../../model/services/initPayrollPage/initPayrollPage";
import { PayrollsPageBaseList } from "../PayrollsPageBaseList";
const reducers = {
    payrollPage: payrollsPageReducer,
};
const PayrollsPage = () => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    useInitEffect(() => {
        dispatch(initPayrollPage(searchParams));
    });
    return (_jsx(DynamicReducerLoader, { reducers: reducers, removeAfterUnmount: false, children: _jsx(PayrollsPageBaseList, {}) }));
};
export default memo(PayrollsPage);
