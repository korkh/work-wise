export function safeJSONParse(str) {
    try {
        return [null, JSON.parse(str)];
    }
    catch (e) {
        return [e, null];
    }
}
