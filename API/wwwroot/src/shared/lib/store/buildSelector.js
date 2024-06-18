import { useSelector } from "react-redux";
export function buildSelector(selector) {
    const useSelectorHook = (...args) => {
        return useSelector((state) => selector(state, ...args));
    };
    return [useSelectorHook, selector];
}
