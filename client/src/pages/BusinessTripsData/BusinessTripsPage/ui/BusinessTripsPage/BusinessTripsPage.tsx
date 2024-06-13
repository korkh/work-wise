import cls from "./BusinessTripsPage.module.scss";
import { memo } from "react";
import {
	DynamicReducerLoader,
	ReducersList,
} from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { businessTripPageReducer } from "@/pages/BusinessTripsData/model/slices/businessTripPageSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSearchParams } from "react-router-dom";
import { useInitEffect } from "@/shared/lib/hooks/useInitEffect/useInitEffect";
import { initBusinessTripPage } from "@/pages/BusinessTripsData/model/services/initBusinessTripPage";
import BusinessTripsInfiniteList from "@/pages/BusinessTripsData/BusinessTripsInfiniteList/ui/BusinessTripsInfiniteList/BusinessTripsInfiniteList";

const reducers: ReducersList = {
	businessTripPage: businessTripPageReducer,
};

const BusinessTripsPage = () => {
	const dispatch = useAppDispatch();
	const [searchParams] = useSearchParams();

	useInitEffect(() => {
		dispatch(initBusinessTripPage(searchParams));
	});

	return (
		<DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
			<BusinessTripsInfiniteList className={cls.list} />
		</DynamicReducerLoader>
	);
};

export default memo(BusinessTripsPage);
