import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./BusinessTripsSummariesPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { BusinessTripsInfiniteList } from "@/pages/BusinessTripsData/BusinessTripsInfiniteList";
import { initBusinessTripPage } from "@/pages/BusinessTripsData/model/services/initBusinessTripPage";
import {
	DynamicReducerLoader,
	ReducersList,
} from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitEffect } from "@/shared/lib/hooks/useInitEffect/useInitEffect";
import { useSearchParams } from "react-router-dom";
import { businessTripPageReducer } from "@/pages/BusinessTripsData/model/slices/businessTripPageSlice";
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
			<BusinessTripsInfiniteList
				variant={getRouteBusinessTripsSummaries()}
				className={cls.list}
			/>
		</DynamicReducerLoader>
	);
};

export default memo(BusinessTripsSummariesPage);
