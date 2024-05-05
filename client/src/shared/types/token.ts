export interface JwtPayload {
	unique_name: string;
	nameid: string;
	email: string;
	role: string | string[];
	nbf: number;
	exp: number;
	iat: number;
}
