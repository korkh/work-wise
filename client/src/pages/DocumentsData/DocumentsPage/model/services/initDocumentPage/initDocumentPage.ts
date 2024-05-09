import { ThunkConfig } from "@/app/providers/StoreProvider";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDocumentsPageInitited } from "../../selectors/getDocumentsPageSelectors";
import { SortOrder } from "@/shared/types/sort";
import { DocumentSortField } from "@/entities/Document";
import { documentsPageActions } from "../../slices/documentPageSlice";
import { fetchDocumentsList } from "../fetchDocumentsList/fetchDocumentsList";

export const initDocumentPage = createAsyncThunk<
	void,
	URLSearchParams,
	ThunkConfig<string>
>("documents/initDocumentPage", async (searchParams, thunkApi) => {
	const { getState, dispatch } = thunkApi;
	const inited = getDocumentsPageInitited(getState());

	if (!inited) {
		const orderFromUrl = searchParams.get("order") as SortOrder;
		const sortFromUrl = searchParams.get("sort") as DocumentSortField;
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
