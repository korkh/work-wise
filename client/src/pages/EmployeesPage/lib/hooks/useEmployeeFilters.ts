import { useSelector } from "react-redux";
import {
	getEmployeesPageOrder,
	getEmployeesPageSearch,
	getEmployeesPageSort,
	getEmployeesPageView,
} from "../../model/selectors/getEmployeesPageSelectors";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useCallback } from "react";
import { useDebounce } from "@/shared/lib/hooks/useDebounce.ts/useDebounce";
import { EmployeeSortField, EmployeeView } from "@/entities/Employee";
import { employeesPageActions } from "../../model/slices/employeesPageSlice";
import { SortOrder } from "@/shared/types/sort";
import { fetchEmployeesList } from "../../model/services/fetchEmployeesList/fetchEmployeesList";

export function useEmployeeFilters() {
	const view = useSelector(getEmployeesPageView);
	const sort = useSelector(getEmployeesPageSort);
	const order = useSelector(getEmployeesPageOrder);
	const search = useSelector(getEmployeesPageSearch);

	const dispatch = useAppDispatch();

	const fetchData = useCallback(() => {
		dispatch(fetchEmployeesList({ replace: true }));
	}, [dispatch]);

	const debouncedData = useDebounce(fetchData, 500);

	const onChangeView = useCallback(
		(view: EmployeeView) => {
			dispatch(employeesPageActions.setView(view));
		},
		[dispatch]
	);

	const onChangeSort = useCallback(
		(newSort: EmployeeSortField) => {
			dispatch(employeesPageActions.setSort(newSort));
			dispatch(employeesPageActions.setPage(1));
			fetchData();
		},
		[dispatch, fetchData]
	);

	const onChangeOrder = useCallback(
		(newOrder: SortOrder) => {
			dispatch(employeesPageActions.setOrder(newOrder));
			dispatch(employeesPageActions.setPage(1));
			fetchData();
		},
		[dispatch, fetchData]
	);

	const onChangeSearch = useCallback(
		(search: string) => {
			dispatch(employeesPageActions.setSearch(search));
			dispatch(employeesPageActions.setPage(1));
			debouncedData();
		},
		[dispatch, debouncedData]
	);

	return {
		view,
		sort,
		order,
		search,
		onChangeView,
		onChangeSort,
		onChangeOrder,
		onChangeSearch,
	};
}
