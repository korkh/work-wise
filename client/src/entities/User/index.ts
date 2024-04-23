export { userReducer, userActions } from "./model/slice/UserSlice";
export type { UserSchema, User, SignIn, Register } from "./model/types/User";
export { UserRole } from "./model/consts/UserRole";

export { initAuthData } from "./model/services/initAuthData";
export {
	isUserAdmin,
	isUserManager,
	isUserAccountant,
	getUserRoles,
} from "./model/selectors/roleSelector";

//Selectors
export { getUserInited } from "./model/selectors/getUserInited";
export { getUserAuthData } from "./model/selectors/getUserAuthData";
export { useJsonSettings } from "./model/selectors/jsonSettings";
