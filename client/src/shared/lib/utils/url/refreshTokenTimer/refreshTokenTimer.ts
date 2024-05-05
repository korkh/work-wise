import { refreshTokenMutation } from "../../../../../entities/User/api/userAPI";
import { AppDispatch } from "./../../../../../app/providers/StoreProvider/config/store";
import { getTokenExpiration } from "./getTokenExpiration";
import { TOKEN_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";

const refreshInterval = 60 * 1000;
let refreshTokenTimeout: string | number | NodeJS.Timeout | undefined | null;

export function startRefreshTokenTimer(dispatch: AppDispatch, token: string) {
	stopRefreshTokenTimer();
	const getTokenFromStorage = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
	if (!getTokenFromStorage) {
		throw new Error(
			"Token not found in local storage. Refresh token procedure aborted! Please login!"
		);
	}
	const formerJWT = JSON.parse(getTokenFromStorage);

	const expiration = getTokenExpiration(token);
	if (!expiration) return;

	const timeout = expiration.getTime() - Date.now() - refreshInterval;

	if (timeout > 0) {
		refreshTokenTimeout = setTimeout(async () => {
			try {
				const response = await dispatch(
					refreshTokenMutation(formerJWT)
				).unwrap();

				if (response.token) {
					const newToken = response.token;
					localStorage.setItem(
						TOKEN_LOCALSTORAGE_KEY,
						JSON.stringify(newToken)
					);
					startRefreshTokenTimer(dispatch, newToken);
				}
			} catch (error) {
				console.error("Error during token refresh:", error);
			}
		}, timeout);
	}
}

export function stopRefreshTokenTimer() {
	if (refreshTokenTimeout) {
		clearTimeout(refreshTokenTimeout);
		refreshTokenTimeout = null;
	}
}
