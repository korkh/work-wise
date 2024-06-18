import { jsx as _jsx } from "react/jsx-runtime";
import i18next from "i18next";
import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
export const I18NextDecorator = ({ children }) => (_jsx(I18nextProvider, { i18n: i18next, children: _jsx(Suspense, { fallback: "", children: children }) }));
