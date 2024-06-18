import { useEffect, useLayoutEffect } from "react";
export function useInitEffect(callback) {
    useEffect(() => {
        if (__PROJECT__ !== "storybook" && __PROJECT__ !== "jest") {
            callback();
        }
        // eslint-disable-next-line
    }, []);
}
export function useInitLayoutEffect(callback) {
    useLayoutEffect(() => {
        if (__PROJECT__ !== "storybook" && __PROJECT__ !== "jest") {
            callback();
        }
        // eslint-disable-next-line
    }, []);
}
