export function getTokenExpiration(token: string) {
	const payload = JSON.parse(atob(token.split(".")[1])); // Decode the payload of the token
	return payload.exp ? new Date(payload.exp * 1000) : null; // Convert UNIX epoch time to Date object
}
