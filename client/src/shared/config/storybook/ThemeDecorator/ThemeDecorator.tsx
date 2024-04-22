import React, { FC } from "react";

import { Theme } from "../../../../shared/consts/Theme";
import { ThemeProvider } from "../../../../app/providers/ThemeProvider";

interface Props {
	children?: React.ReactNode;
	theme: Theme;
}
const ThemeDecorator: FC<Props> = ({ children, theme }) => (
	<ThemeProvider initialTheme={theme}>
		<div className={`app ${theme}`} style={{ minWidth: "100vw" }}>
			{children}
		</div>
	</ThemeProvider>
);
export default ThemeDecorator;
