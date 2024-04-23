import {
	ForwardedRef,
	ImgHTMLAttributes,
	memo,
	ReactElement,
	useLayoutEffect,
	useState,
} from "react";

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	className?: string;
	fallback?: ReactElement;
	fallbackError?: ReactElement;
	ref?: ForwardedRef<HTMLImageElement>;
}

export const AppImage = memo(function AppImage(props: AppImageProps) {
	const {
		className,
		src,
		alt = "image",
		fallbackError,
		fallback,
		...otherProps
	} = props;
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	useLayoutEffect(() => {
		const img = new Image();
		img.src = src ?? "";
		img.onload = () => {
			setIsLoading(false);
		};
		img.onerror = () => {
			setIsLoading(false);
			setHasError(true);
		};
	}, [src]);

	if (isLoading && fallback) {
		return fallback;
	}

	if (hasError && fallbackError) {
		return fallbackError;
	}

	return <img className={className} src={src} alt={alt} {...otherProps} />;
});
