import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useMemo, useRef, useState, } from "react";
const MobileAnimationContext = createContext({});
// Обе либы зависят друг от друга
const getAsyncMobileAnimationModules = async () => {
    return Promise.all([
        import("@react-spring/web"),
        import("@use-gesture/react"),
    ]); //Promise.all will be completed when 2 of following promisses will be resolved
};
export const useMobileAnimationLibs = () => {
    return useContext(MobileAnimationContext); //to avoid avery time usage checks for undefined or null
};
//we not making following provider global. It will be used only in components utilizing animation
export const MobileAnimationProvider = ({ children, }) => {
    //Refs need to have access to values from render to render but to avoid nеш redrawing
    const SpringRef = useRef();
    const GestureRef = useRef();
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        getAsyncMobileAnimationModules().then(([spring, gesture]) => {
            SpringRef.current = spring;
            GestureRef.current = gesture;
            setIsLoaded(true);
        });
    }, []);
    //must be memoized to avoid rerenders
    const value = useMemo(() => ({
        gesture: GestureRef.current,
        spring: SpringRef.current,
        isLoaded,
    }), [isLoaded]);
    return (_jsx(MobileAnimationContext.Provider, { value: value, children: children }));
};
