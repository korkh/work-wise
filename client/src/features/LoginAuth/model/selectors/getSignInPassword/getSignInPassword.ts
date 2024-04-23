import { StateSchema } from "@/app/providers/StoreProvider";

export const getSignInPassword = (state: StateSchema) =>
	state?.signInForm?.password || "";
