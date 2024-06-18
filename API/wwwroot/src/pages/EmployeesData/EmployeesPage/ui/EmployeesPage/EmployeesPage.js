import { jsx as _jsx } from "react/jsx-runtime";
import cls from "./EmployeesPage.module.scss";
import { memo } from "react";
import { DynamicReducerLoader, } from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { employeesPageReducer } from "../../model/slices/employeesPageSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSearchParams } from "react-router-dom";
import { useInitEffect } from "@/shared/lib/hooks/useInitEffect/useInitEffect";
import { initEmployeesPage } from "../../model/services/initEmployeesPage/initEmployeesPage";
import { EmployeeInfiniteList } from "../EmployeeInfiniteList/EmployeeInfiniteList";
const reducers = {
    employeePage: employeesPageReducer,
};
const EmployeesPage = memo(function EmployeesPage() {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    useInitEffect(() => {
        dispatch(initEmployeesPage(searchParams));
    });
    return (_jsx(DynamicReducerLoader, { reducers: reducers, removeAfterUnmount: false, children: _jsx(EmployeeInfiniteList, { className: cls.list }) }));
});
export default EmployeesPage;
