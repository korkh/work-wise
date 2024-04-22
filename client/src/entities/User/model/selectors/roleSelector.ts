import { createSelector } from "@reduxjs/toolkit";

import { UserRole } from "../consts/UserRole";

import { StateSchema } from "@/app/providers/StoreProvider";

export const getUserRoles = (state: StateSchema) => state.user.authData?.Roles;

//using reselect we wemoise list of roles and then inside will check if userAdmin or not
export const isUserAdmin = createSelector(getUserRoles, (roles) =>
	Boolean(roles?.includes(UserRole.ADMIN))
);
export const isUserManager = createSelector(getUserRoles, (roles) =>
	Boolean(roles?.includes(UserRole.MANAGER))
);
export const isUserAccountant = createSelector(getUserRoles, (roles) =>
	Boolean(roles?.includes(UserRole.ACCOUNTANT))
);
