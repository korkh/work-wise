import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider } from "../../../../app/providers/ThemeProvider";
const ThemeDecorator = ({ children, theme }) => (_jsx(ThemeProvider, { initialTheme: theme, children: _jsx("div", { className: `app ${theme}`, style: { minWidth: "100vw" }, children: children }) }));
export default ThemeDecorator;
