import { rtkApi } from "@/shared/api/rtkApi";
const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        loginUser: build.mutation({
            query: (credentials) => ({
                url: "api/account/login",
                method: "POST",
                body: credentials,
            }),
        }),
        registerUser: build.mutation({
            query: (user) => ({
                url: "api/account/register",
                method: "POST",
                body: user,
            }),
        }),
        verifyEmail: build.mutation({
            query: ({ token, email }) => ({
                url: "api/account/verifyEmail",
                method: "POST",
                body: { token, email },
            }),
        }),
        resendEmailConfirmationLink: build.mutation({
            query: (data) => ({
                url: "api/account/resendEmailConfirmationLink",
                method: "GET",
                params: data,
            }),
        }),
        refreshToken: build.mutation({
            query: () => ({
                url: "api/account/refreshToken",
                method: "POST",
                // Assuming the refresh token is sent via cookie automatically
            }),
        }),
    }),
});
// Export hooks for usage in components, if needed
export const { useLoginUserMutation, useRegisterUserMutation, useVerifyEmailMutation, useResendEmailConfirmationLinkMutation, useRefreshTokenMutation, } = userApi;
