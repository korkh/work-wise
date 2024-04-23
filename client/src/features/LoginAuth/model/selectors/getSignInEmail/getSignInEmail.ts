import { StateSchema } from "@/app/providers/StoreProvider";

export const getSignInEmail = (state: StateSchema) =>
	state?.signInForm?.email || "";
