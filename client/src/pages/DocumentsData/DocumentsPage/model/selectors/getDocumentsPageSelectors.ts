import { StateSchema } from "@/app/providers/StoreProvider";
import { DocumentSortField } from "@/entities/Document";
import { buildSelector } from "@/shared/lib/store";

export const getDocumentsPageIsLoading = (state: StateSchema) =>
	state.documentPage?.isLoading || false;
export const getDocumentsPageError = (state: StateSchema) =>
	state.documentPage?.error;
export const getDocumentsPagePageNumber = (state: StateSchema) =>
	state.documentPage?.pageNumber || 1;
export const getDocumentsPageSize = (state: StateSchema) =>
	state.documentPage?.pageSize || 10;
export const getDocumentsPageHasMore = (state: StateSchema) =>
	state.documentPage?.hasMore;
export const getDocumentsPageInitited = (state: StateSchema) =>
	state.documentPage?._inited;
export const getDocumentsPageOrder = (state: StateSchema) =>
	state.documentPage?.order ?? "asc";
export const getDocumentsPageSort = (state: StateSchema) =>
	state.documentPage?.sort ?? DocumentSortField.TITLE;
export const getDocumentsPageSearch = (state: StateSchema) =>
	state.documentPage?.search ?? "";
export const [useDocuemntById] = buildSelector(
	(state, id: string) => state.documentPage?.entities[id]
);
