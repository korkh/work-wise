import { StateSchema } from "@/app/providers/StoreProvider";

export const getSignInState = (state: StateSchema) => state?.signInForm;
