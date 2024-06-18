import { jsx as _jsx } from "react/jsx-runtime";
import cls from "./BusinessTripsSummariesPage.module.scss";
import { memo } from "react";
import { BusinessTripsInfiniteList } from '../../../BusinessTripsInfiniteList';
import { initBusinessTripPage } from '../../../model/services/initBusinessTripPage';
import { DynamicReducerLoader, } from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitEffect } from "@/shared/lib/hooks/useInitEffect/useInitEffect";
import { useSearchParams } from "react-router-dom";
import { businessTripPageReducer } from '../../../model/slices/businessTripPageSlice';
import { getRouteBusinessTripsSummaries } from "@/shared/consts/routerConsts";
const reducers = {
    businessTripPage: businessTripPageReducer,
};
const BusinessTripsSummariesPage = () => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    useInitEffect(() => {
        dispatch(initBusinessTripPage(searchParams));
    });
    return (_jsx(DynamicReducerLoader, { reducers: reducers, removeAfterUnmount: false, children: _jsx(BusinessTripsInfiniteList, { variant: getRouteBusinessTripsSummaries(), className: cls.list }) }));
};
export default memo(BusinessTripsSummariesPage);
