import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter } from "react-router-dom";
const RouterDecorator = ({ children }) => (_jsx(BrowserRouter, { children: children }));
export default RouterDecorator;
