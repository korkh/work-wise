import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDocumentsPageHasMore, getDocumentsPagePageNumber, getDocumentsPageIsLoading, } from "../../selectors/getDocumentsPageSelectors";
import { documentsPageActions } from "../../slices/documentPageSlice";
import { fetchDocumentsList } from "../fetchDocumentsList/fetchDocumentsList";
export const fetchNextDocumentsPage = createAsyncThunk("employeesPage/fetchNextemployeesPage", async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const hasMore = getDocumentsPageHasMore(getState());
    const page = getDocumentsPagePageNumber(getState());
    const isLoading = getDocumentsPageIsLoading(getState());
    if (hasMore && !isLoading) {
        dispatch(documentsPageActions.setPage(page + 1));
        dispatch(fetchDocumentsList({}));
    }
});
