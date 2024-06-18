import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useMemo, useState } from "react";
const ForceUpdateContext = createContext({
    value: true,
    forceUpdate: () => { },
});
export const useForceUpdate = () => {
    const { forceUpdate } = useContext(ForceUpdateContext);
    return forceUpdate;
};
export function ForceUpdateProvider({ children }) {
    const [value, setValue] = useState(true);
    const forceUpdate = () => {
        setValue((prev) => !prev);
        setTimeout(() => {
            setValue((prev) => !prev);
        }, 120);
    };
    const valueContext = useMemo(() => {
        return { value, forceUpdate };
    }, [value]);
    if (!value) {
        return null;
    }
    return (_jsx(ForceUpdateContext.Provider, { value: valueContext, children: children }));
}
