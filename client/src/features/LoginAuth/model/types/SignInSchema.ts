import { User } from "@/entities/User";

export interface SignInSchema {
	email: string;
	password: string;
	user: User | null;
	isLoading: boolean;
	error?: string;
}
