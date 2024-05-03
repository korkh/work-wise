import { useCallback, useRef } from "react";

interface TimeoutId {
	id: NodeJS.Timeout | undefined;
}

export function useDebounce(
	callback: (...args: unknown[]) => void,
	delay: number
) {
	const timer = useRef<TimeoutId>({ id: undefined });

	return useCallback(
		(...args: unknown[]) => {
			if (timer.current.id != undefined) {
				clearTimeout(timer.current.id);
			}
			timer.current.id = setTimeout(() => {
				callback(...args);
			}, delay);
		},
		[callback, delay]
	);
}
