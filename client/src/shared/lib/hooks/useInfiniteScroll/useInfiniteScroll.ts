import { MutableRefObject, useEffect, useRef } from "react";

export interface UseInfiniteScrollOptions {
	callback?: () => void;
	triggerRef: MutableRefObject<HTMLElement>;
	wrapperRef: MutableRefObject<HTMLElement> | undefined;
}

/**
 * Custom hook for implementing infinite scroll behavior.
 * @param param0 Options for configuring infinite scroll behavior
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 */

export function useInfiniteScroll({
	callback,
	wrapperRef,
	triggerRef,
}: UseInfiniteScrollOptions) {
	// Ref for the IntersectionObserver instance
	const observer = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		const wrapperElement = wrapperRef?.current || null;

		const triggerElement = triggerRef.current;

		if (callback) {
			const options = {
				root: wrapperElement,
				rootMargin: "0px",
				threshold: 1.0,
			};

			observer.current = new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting) {
					callback();
				}
			}, options);

			// Start observing the trigger element
			observer.current.observe(triggerElement);
		}

		return () => {
			if (observer.current && triggerElement) {
				// Stop observing the trigger element when component unmounts
				observer.current.unobserve(triggerElement);
			}
		};
	}, [callback, triggerRef, wrapperRef]);
}
