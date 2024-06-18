import { rtkApi } from "@/shared/api/rtkApi";
const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getCurrentUser: build.query({
            query: (token) => ({
                url: "/account/currentUser",
                method: "GET",
                credentials: "include",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
        }),
        loginUser: build.mutation({
            query: (credentials) => ({
                url: "/account/login",
                method: "POST",
                body: credentials,
            }),
        }),
        registerUser: build.mutation({
            query: (user) => ({
                url: "/account/register",
                method: "POST",
                body: user,
            }),
        }),
        verifyEmail: build.mutation({
            query: ({ token, email }) => ({
                url: "/account/verifyEmail",
                method: "POST",
                body: { token, email },
            }),
        }),
        resendEmailConfirmationLink: build.mutation({
            query: ({ email }) => ({
                url: "/account/resendEmailConfirmationLink",
                method: "GET",
                params: { email },
            }),
        }),
        refreshToken: build.mutation({
            query: (token) => ({
                url: "/account/refreshToken",
                method: "POST",
                credentials: "include",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
        }),
    }),
});
export const loginUserMutation = userApi.endpoints.loginUser.initiate;
export const registerUserMutation = userApi.endpoints.registerUser.initiate;
export const verifyEmailMutation = userApi.endpoints.verifyEmail.initiate;
export const refreshTokenMutation = userApi.endpoints.refreshToken.initiate;
export const getCurrentUserQuery = userApi.endpoints.getCurrentUser.initiate;
export const resendEmailConfirmationLinkQuery = userApi.endpoints.resendEmailConfirmationLink.initiate;
