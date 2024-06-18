import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBusinessTripPageInitited } from "../selectors/businessTripPageSelectors";
import { businessTripPageActions } from "../slices/businessTripPageSlice";
import { fetchBusinessTripsList } from "./fetchBusinessTripsList";
export const initBusinessTripPage = createAsyncThunk("businessTripPage/initBusinessTripPage", async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getBusinessTripPageInitited(getState());
    if (!inited) {
        const orderFromUrl = searchParams.get("order");
        const sortFromUrl = searchParams.get("sort");
        const searchFromUrl = searchParams.get("search");
        if (orderFromUrl) {
            dispatch(businessTripPageActions.setOrder(orderFromUrl));
        }
        if (sortFromUrl) {
            dispatch(businessTripPageActions.setSort(sortFromUrl));
        }
        if (searchFromUrl) {
            dispatch(businessTripPageActions.setSearch(searchFromUrl));
        }
        dispatch(businessTripPageActions.initState());
        dispatch(fetchBusinessTripsList({}));
    }
});
