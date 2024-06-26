import { memo } from "react";
import { BusinessTripsInfiniteList } from "../../../BusinessTripsInfiniteList";
import { initBusinessTripPage } from "../../../model/services/initBusinessTripPage";
import {
	DynamicReducerLoader,
	ReducersList,
} from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitEffect } from "@/shared/lib/hooks/useInitEffect/useInitEffect";
import { useSearchParams } from "react-router-dom";
import { businessTripPageReducer } from "../../../model/slices/businessTripPageSlice";
import { getRouteBusinessTripsSummaries } from "@/shared/consts/routerConsts";

const reducers: ReducersList = {
	businessTripPage: businessTripPageReducer,
};

const BusinessTripsSummariesPage = () => {
	const dispatch = useAppDispatch();
	const [searchParams] = useSearchParams();

	useInitEffect(() => {
		dispatch(initBusinessTripPage(searchParams));
	});

	return (
		<DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
			<BusinessTripsInfiniteList variant={getRouteBusinessTripsSummaries()} />
		</DynamicReducerLoader>
	);
};

export default memo(BusinessTripsSummariesPage);
