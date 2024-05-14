import { StateSchema } from "@/app/providers/StoreProvider";
import { DocumentSortField, EmployeeDocument } from "@/entities/Document";
import {
	PayloadAction,
	createEntityAdapter,
	createSlice,
} from "@reduxjs/toolkit";
import { EntityAdapterOptions } from "@reduxjs/toolkit/dist/entities/models";
import { DocumentPageSchema } from "../types/DocumentPageSchema";
import { SortOrder } from "@/shared/types/sort";
import { fetchDocumentsList } from "../services/fetchDocumentsList/fetchDocumentsList";

const adapterOptions: EntityAdapterOptions<EmployeeDocument, string> = {
	selectId: (doc: EmployeeDocument) => doc.id,
};

export const documentsAdapter =
	createEntityAdapter<EmployeeDocument>(adapterOptions);

const initialState: DocumentPageSchema = {
	...documentsAdapter.getInitialState(),
	isLoading: false,
	error: undefined,
	ids: [],
	entities: {},
	pageNumber: 1,
	pageSize: 10,
	hasMore: true,
	order: "asc",
	sort: DocumentSortField.TITLE,
	search: "",
	_inited: false,
};

export const selectDocumentPageState = (state: StateSchema) =>
	state.documentPage || initialState;

export const { selectAll: selectAllDocuments, selectById: selectDocumentById } =
	documentsAdapter.getSelectors(selectDocumentPageState);

const documentsPageSlice = createSlice({
	name: "pages/documentPageSlice",
	initialState,
	reducers: {
		setPage: (state, action: PayloadAction<number>) => {
			state.pageNumber = action.payload;
		},
		setOrder: (state, action: PayloadAction<SortOrder>) => {
			state.order = action.payload;
		},
		setSort: (state, action: PayloadAction<DocumentSortField>) => {
			state.sort = action.payload;
		},
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},
		initState: (state) => {
			state.pageSize = 8;
			state._inited = true;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchDocumentsList.pending, (state, action) => {
				state.error = undefined;
				state.isLoading = true;
				if (action.meta.arg.replace) {
					documentsAdapter.removeAll(state);
				}
			})
			.addCase(fetchDocumentsList.fulfilled, (state, action) => {
				state.isLoading = false;
				state.hasMore = action.payload.length >= state.pageSize;
				const documents = action.payload.filter(
					(item: EmployeeDocument) => item.employeeId
				);
				if (action.meta.arg.replace) {
					documentsAdapter.setAll(state, documents);
				} else {
					documentsAdapter.addMany(state, documents);
				}
			})
			.addCase(fetchDocumentsList.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { reducer: documentsPageReducer, actions: documentsPageActions } =
	documentsPageSlice;
