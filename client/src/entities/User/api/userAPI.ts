import { rtkApi } from "@/shared/api/rtkApi";

import { SignIn, Register, User } from "../model/types/User";

const userApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getCurrentUser: build.mutation<User, string>({
			query: (token) => ({
				url: "api/account",
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}),
		}),
		loginUser: build.mutation<User, SignIn>({
			query: (credentials) => ({
				url: "api/account/login",
				method: "POST",
				body: credentials,
			}),
		}),
		registerUser: build.mutation<User, Register>({
			query: (user) => ({
				url: "api/account/register",
				method: "POST",
				body: user,
			}),
		}),
		verifyEmail: build.mutation<void, { token: string; email: string }>({
			query: ({ token, email }) => ({
				url: "api/account/verifyEmail",
				method: "POST",
				body: { token, email },
			}),
		}),
		resendEmailConfirmationLink: build.mutation<void, { email: string }>({
			query: ({ email }) => ({
				url: "api/account/resendEmailConfirmationLink",
				method: "GET",
				params: { email },
			}),
		}),
		refreshToken: build.mutation<User, void>({
			query: () => ({
				url: "api/account/refreshToken",
				method: "POST",
			}),
		}),
	}),
});

export const loginUserMutation = userApi.endpoints.loginUser.initiate;
export const registerUserMutation = userApi.endpoints.registerUser.initiate;
export const verifyEmailMutation = userApi.endpoints.verifyEmail.initiate;
export const refreshTokenMutation = userApi.endpoints.refreshToken.initiate;
export const getCurrentUserMutation = userApi.endpoints.getCurrentUser.initiate;
export const resendEmailConfirmationLinkQuery =
	userApi.endpoints.resendEmailConfirmationLink.initiate;
