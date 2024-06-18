import { jsx as _jsx } from "react/jsx-runtime";
import cls from "./BusinessTripsPage.module.scss";
import { memo } from "react";
import { DynamicReducerLoader, } from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { businessTripPageReducer } from "../../../model/slices/businessTripPageSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSearchParams } from "react-router-dom";
import { useInitEffect } from "@/shared/lib/hooks/useInitEffect/useInitEffect";
import { initBusinessTripPage } from "../../../model/services/initBusinessTripPage";
import { BusinessTripsInfiniteList } from "../..";
const reducers = {
    businessTripPage: businessTripPageReducer,
};
const BusinessTripsPage = () => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    useInitEffect(() => {
        dispatch(initBusinessTripPage(searchParams));
    });
    return (_jsx(DynamicReducerLoader, { reducers: reducers, removeAfterUnmount: false, children: _jsx(BusinessTripsInfiniteList, { className: cls.list }) }));
};
export default memo(BusinessTripsPage);
