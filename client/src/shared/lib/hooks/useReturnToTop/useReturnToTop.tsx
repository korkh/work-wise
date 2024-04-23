import { useCallback, useEffect, useState } from "react";

export const useReturnToTop = (scrollThreshold = 100) => {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = useCallback(() => {
		const scrollTop = window.scrollY || document.documentElement.scrollTop;
		setIsVisible(scrollTop > scrollThreshold);
	}, [scrollThreshold]);

	useEffect(() => {
		window.addEventListener("returnScroll", handleScroll);
		return () => {
			window.removeEventListener("returnScroll", handleScroll);
		};
	}, [handleScroll]);

	const returnToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return { isVisible, returnToTop };
};
