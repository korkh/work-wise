import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "../../../../shared/lib/context/ThemeContext";
import { Theme } from "../../../../shared/consts/Theme";
import { LOCAL_STORAGE_THEME_KEY } from "../../../../shared/consts/localStorage";
const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
const ThemeProvider = (props) => {
    const { initialTheme, children } = props;
    const [isThemeInited, setThemeInited] = useState(false);
    const [theme, setTheme] = useState(initialTheme || fallbackTheme || Theme.LIGHT);
    useEffect(() => {
        if (!isThemeInited && initialTheme) {
            setTheme(initialTheme);
            setThemeInited(true);
        }
    }, [initialTheme, isThemeInited]);
    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);
    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);
    return (_jsx(ThemeContext.Provider, { value: defaultProps, children: children }));
};
export default ThemeProvider;
