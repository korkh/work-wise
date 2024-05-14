import { createSelector } from "@reduxjs/toolkit";
import { buildSelector } from "@/shared/lib/store";
import { selectDocumentPageState } from "../slices/documentPageSlice";
// Memoized selectors for other documentPage properties
export const getDocumentsPageIsLoading = createSelector(
	[selectDocumentPageState],
	(documentPage) => documentPage.isLoading || false
);

export const getDocumentsPageError = createSelector(
	[selectDocumentPageState],
	(documentPage) => documentPage.error
);

export const getDocumentsPagePageNumber = createSelector(
	[selectDocumentPageState],
	(documentPage) => documentPage.pageNumber || 1
);

export const getDocumentsPageSize = createSelector(
	[selectDocumentPageState],
	(documentPage) => documentPage.pageSize || 10
);

export const getDocumentsPageHasMore = createSelector(
	[selectDocumentPageState],
	(documentPage) => documentPage.hasMore
);

export const getDocumentsPageInitited = createSelector(
	[selectDocumentPageState],
	(documentPage) => documentPage._inited
);

export const getDocumentsPageOrder = createSelector(
	[selectDocumentPageState],
	(documentPage) => documentPage.order ?? "asc"
);

export const getDocumentsPageSort = createSelector(
	[selectDocumentPageState],
	(documentPage) => documentPage.sort ?? "TITLE"
);

export const getDocumentsPageSearch = createSelector(
	[selectDocumentPageState],
	(documentPage) => documentPage.search ?? ""
);

export const [useDocumentById] = buildSelector(
	(state, id: string) => state.documentPage?.entities[id]
);
