import { UserRole } from "../consts/UserRole";

export interface User {
	id: string;
	DisplayName: string;
	Token: string;
	Image?: string;
	UserName: string;
	Email: string;
	Roles?: UserRole[];
}

export interface SignIn {
	email: string;
	password: string;
}

export interface Register {
	DisplayName: string;
	Email: string;
	Password: string;
	UserName: string;
}

export interface UserSchema {
	authData?: User | null;
	_inited: boolean;
}
