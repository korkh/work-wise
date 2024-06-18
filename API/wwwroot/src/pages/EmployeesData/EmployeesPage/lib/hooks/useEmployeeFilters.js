import { useSelector } from "react-redux";
import { getEmployeesPageOrder, getEmployeesPageSearch, getEmployeesPageSort, } from "../../model/selectors/getEmployeesPageSelectors";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useCallback } from "react";
import { useDebounce } from "@/shared/lib/hooks/useDebounce.ts/useDebounce";
import { employeesPageActions } from "../../model/slices/employeesPageSlice";
import { fetchEmployeesList } from "../../model/services/fetchEmployeesList/fetchEmployeesList";
export function useEmployeeFilters() {
    const sort = useSelector(getEmployeesPageSort);
    const order = useSelector(getEmployeesPageOrder);
    const search = useSelector(getEmployeesPageSearch);
    const dispatch = useAppDispatch();
    const fetchData = useCallback(() => {
        dispatch(fetchEmployeesList({ replace: true }));
    }, [dispatch]);
    const debouncedData = useDebounce(fetchData, 500);
    // const onChangeView = useCallback(
    // 	(view: EmployeeView) => {
    // 		dispatch(employeesPageActions.setView(view));
    // 	},
    // 	[dispatch]
    // );
    const onChangeSort = useCallback((newSort) => {
        dispatch(employeesPageActions.setSort(newSort));
        dispatch(employeesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    const onChangeOrder = useCallback((newOrder) => {
        dispatch(employeesPageActions.setOrder(newOrder));
        dispatch(employeesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    const onChangeSearch = useCallback((search) => {
        dispatch(employeesPageActions.setSearch(search));
        dispatch(employeesPageActions.setPage(1));
        debouncedData();
    }, [dispatch, debouncedData]);
    return {
        sort,
        order,
        search,
        onChangeSort,
        onChangeOrder,
        onChangeSearch,
    };
}
