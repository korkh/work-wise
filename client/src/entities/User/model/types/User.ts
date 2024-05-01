export interface User {
	id: string;
	displayName: string;
	token: string;
	image?: string;
	userName: string;
	email: string;
	roles?: string[];
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
	error?: string;
	_inited: boolean;
}
