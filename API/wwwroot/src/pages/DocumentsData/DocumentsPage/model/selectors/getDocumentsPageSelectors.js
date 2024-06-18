import { buildSelector } from "@/shared/lib/store";
import { DocumentSortField } from "@/entities/Document";
export const getDocumentsPageIsLoading = (state) => state.documentPage?.isLoading || false;
export const getDocumentsPageError = (state) => state.documentPage?.error;
export const getDocumentsPagePageNumber = (state) => state.documentPage?.pageNumber || 1;
export const getDocumentsPageSize = (state) => state.documentPage?.pageSize || 10;
export const getDocumentsPageHasMore = (state) => state.documentPage?.hasMore;
export const getDocumentsPageInitited = (state) => state.documentPage?._inited;
export const getDocumentsPageOrder = (state) => state.documentPage?.order ?? "asc";
export const getDocumentsPageSort = (state) => state.documentPage?.sort ?? DocumentSortField.TITLE;
export const getDocumentsPageSearch = (state) => state.documentPage?.search ?? "";
export const [useDocumentById] = buildSelector((state, id) => state.documentPage?.entities[id]);
