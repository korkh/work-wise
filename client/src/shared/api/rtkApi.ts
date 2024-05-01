import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TOKEN_LOCALSTORAGE_KEY } from "../consts/localStorage";

export const rtkApi = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: __API__,
		prepareHeaders: (headers) => {
			const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
			if (token) {
				const jwt = JSON.parse(token);
				headers.set("Authorization", `Bearer ${jwt}`);
			}
			return headers;
		},
		credentials: "include",
	}),
	endpoints: () => ({}),
});
