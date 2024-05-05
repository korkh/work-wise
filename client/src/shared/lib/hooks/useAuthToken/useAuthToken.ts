import { TOKEN_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
import { JwtPayload } from "@/shared/types/token";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

/**
 * Following custom hook is to decode the JWT token from localStorage.
 * @returns {object} The decoded token or null if no valid token is found.
 */
export const useAuthToken = () => {
	const [authData, setAuthData] = useState<JwtPayload | null>(null);

	useEffect(() => {
		const handleStorageChange = () => {
			const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
			if (token) {
				try {
					const decodedToken = jwtDecode<JwtPayload>(token);
					setAuthData(decodedToken);
				} catch (error) {
					console.error("Failed to decode token:", error);
					toast.error("Failed to decode token.");
					setAuthData(null);
				}
			} else {
				setAuthData(null);
			}
		};

		window.addEventListener("storage", handleStorageChange);

		handleStorageChange();

		return () => {
			window.removeEventListener("storage", handleStorageChange);
		};
	}, []);

	return authData;
};
