import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Theme } from "../../../consts/Theme";

interface UseThemeResult {
	toggleTheme: (saveAction?: (theme: Theme) => void) => void;
	theme: Theme;
}

export function useTheme(): UseThemeResult {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = (saveAction?: (theme: Theme) => void) => {
		let newTheme: Theme;
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
