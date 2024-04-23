import { StateSchema } from "@/app/providers/StoreProvider";

export const getSignInError = (state: StateSchema) => state?.signInForm?.error;
