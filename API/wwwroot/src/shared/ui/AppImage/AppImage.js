import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useLayoutEffect, useState, } from "react";
export const AppImage = memo(function AppImage(props) {
    const { className, src, alt = "image", fallbackError, fallback, ...otherProps } = props;
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
    return _jsx("img", { className: className, src: src, alt: alt, ...otherProps });
});
