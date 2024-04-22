import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/shared/ui/Button";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
function App() {
    const { t } = useTranslation("translation");
    return (_jsx(Suspense, { fallback: "", children: _jsxs("div", { className: "content-page", children: [_jsx("h1", { children: t("HELLO VITE") }), _jsx(Button, { variant: "outline", color: "error", children: "BUTTON" })] }) }));
}
export default App;
