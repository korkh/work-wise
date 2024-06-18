export function getQueryParams(params) {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([name, value]) => {
        if (value != undefined) {
            searchParams.set(name, value);
        }
    });
    return `?${searchParams.toString()}`;
}
export function addQueryParams(params) {
    window.history.pushState(null, "", getQueryParams(params));
}
