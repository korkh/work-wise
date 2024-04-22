import { rtkApi } from "@/shared/api/rtkApi";

import { Login, Register, User } from "../model/types/User";

const userApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getCurrentUser: build.query<User, void>({
			query: () => "api/account/currentUser",
		}),
		loginUser: build.mutation<User, Login>({
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
			query: (data) => ({
				url: "api/account/resendEmailConfirmationLink",
				method: "GET",
				params: data,
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
export const getCurrentUserQuery = userApi.endpoints.getCurrentUser.initiate;
export const resendEmailConfirmationLinkQuery =
	userApi.endpoints.resendEmailConfirmationLink.initiate;
