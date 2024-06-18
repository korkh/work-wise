import { createSelector } from "@reduxjs/toolkit";
import { UserRole } from "../consts/UserRole";
export const getUserRoles = (state) => state.user.authData?.roles;
//using reselect we wemoise list of roles and then inside will check if userAdmin or not
export const isUserAdmin = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.ADMIN)));
export const isUserManager = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.MANAGER)));
export const isUserAccountant = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.ACCOUNTANT)));
