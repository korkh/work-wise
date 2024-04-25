import { memo, useCallback } from "react";
import { Glyph } from "@/shared/ui/Glyph";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import ThemeIcon from "@/shared/assets/icons/theme.svg?react";

export const ThemeSwitcher = memo(function ThemeSwitcher() {
	const { toggleTheme } = useTheme();

	const onToggleHandler = useCallback(() => {
		toggleTheme();
	}, [toggleTheme]);
	return <Glyph SvgImage={ThemeIcon} clickable onClick={onToggleHandler} />;
});
