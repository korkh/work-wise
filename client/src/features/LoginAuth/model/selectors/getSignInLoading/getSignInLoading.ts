import { StateSchema } from "@/app/providers/StoreProvider";

export const getSignInLoading = (state: StateSchema) =>
	state?.signInForm?.isLoading || false;
