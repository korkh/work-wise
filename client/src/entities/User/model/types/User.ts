import { UserRole } from "../consts/UserRole";

export interface User {
	DisplayName: string;
	Token: string;
	Image?: string;
	UserName: string;
	Roles?: UserRole[];
}

export interface Login {
	Email: string;
	Password: string;
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
