import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Theme } from "../../../consts/Theme";
export function useTheme() {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = (saveAction) => {
        let newTheme;
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                newTheme = Theme.VIOLET;
                break;
            case Theme.VIOLET:
                newTheme = Theme.BLUE;
                break;
            case Theme.BLUE:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.LIGHT;
        }
        setTheme?.(newTheme);
        saveAction?.(newTheme); // f.ex. to localStorage
    };
    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
