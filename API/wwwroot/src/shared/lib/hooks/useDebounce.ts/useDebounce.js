import { useCallback, useRef } from "react";
export function useDebounce(callback, delay) {
    const timer = useRef({ id: undefined });
    return useCallback((...args) => {
        if (timer.current.id != undefined) {
            clearTimeout(timer.current.id);
        }
        timer.current.id = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
}
