export function safeJSONParse(str: string) {
	try {
		return [null, JSON.parse(str)];
	} catch (e) {
		return [e, null];
	}
}
