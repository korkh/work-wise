import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDocumentsPageInitited } from "../../selectors/getDocumentsPageSelectors";
import { documentsPageActions } from "../../slices/documentPageSlice";
import { fetchDocumentsList } from "../fetchDocumentsList/fetchDocumentsList";
export const initDocumentPage = createAsyncThunk("documents/initDocumentPage", async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getDocumentsPageInitited(getState());
    if (!inited) {
        const orderFromUrl = searchParams.get("order");
        const sortFromUrl = searchParams.get("sort");
        const searchFromUrl = searchParams.get("search");
        if (orderFromUrl) {
            dispatch(documentsPageActions.setOrder(orderFromUrl));
        }
        if (sortFromUrl) {
            dispatch(documentsPageActions.setSort(sortFromUrl));
        }
        if (searchFromUrl) {
            dispatch(documentsPageActions.setSearch(searchFromUrl));
        }
        dispatch(documentsPageActions.initState());
        dispatch(fetchDocumentsList({}));
    }
});
