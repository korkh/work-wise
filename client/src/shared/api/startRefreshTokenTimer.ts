import { TOKEN_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
import { refreshTokenMutation } from "../../entities/User/api/userAPI";
import { userActions } from "../../entities/User/model/slice/UserSlice";
import { toast } from "react-toastify";
import { User } from "../../entities/User/model/types/User";
import { AppDispatch } from "@/app/providers/StoreProvider";

const refreshInterval = 10 * 60 * 1000;

export function startRefreshTokenTimer(dispatch: AppDispatch) {
	const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
	if (token) {
		const jwt = JSON.parse(token);
		const expires = new Date(jwt.exp * 1000);
		const timeout = expires.getTime() - Date.now() - refreshInterval;

		setTimeout(() => {
			dispatch(refreshTokenMutation(jwt))
				.unwrap()
				.then((updatedUser: User) => {
					dispatch(userActions.setAuthData(updatedUser));
					startRefreshTokenTimer(dispatch); // Reset the timer after refreshing
				})
				.catch((error: unknown) => {
					console.error("Failed to refresh token", error);
					toast("Session expired, please login again");
					dispatch(userActions.signOut());
				});
		}, timeout);
	}
}
