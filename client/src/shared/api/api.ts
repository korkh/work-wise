import axios from "axios";
import { TOKEN_LOCALSTORAGE_KEY } from "../consts/localStorage";
import { User } from "../../entities/User";

export const $api = axios.create({
	withCredentials: true,
	baseURL: __API__,
});

$api.interceptors.request.use((config) => {
	const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
	if (token && config.headers) {
		const JwtToken = JSON.parse(token);
		config.headers.Authorization = `Bearer ${JwtToken}`;
	}
	return config;
});

$api.interceptors.response.use(
	(config) => {
		return config;
	},
	async (error) => {
		const originalRequest = error.config;
		if (
			error.response.status === 401 &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true;
			try {
				const formerJWT = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
				const res = await axios.post<User>(
					`${__API__}/account/refreshToken`,
					{},
					{
						headers: {
							Authorization: `Bearer ${formerJWT}`,
						},
						withCredentials: true,
					}
				);
				const newToken = res.data.token;
				localStorage.setItem(TOKEN_LOCALSTORAGE_KEY, newToken);
				originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
				return $api.request(originalRequest);
			} catch (error) {
				console.log("NOT AUTHORIZED!");
			}
		}
		if (
			error.response &&
			error.response.data &&
			error.response.status === 400
		) {
			console.error("Error message from server:", error.response.data.error);
		}
		return Promise.reject(error);
	}
);

export default $api;
