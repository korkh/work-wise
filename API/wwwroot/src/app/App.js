import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getUserInited, initAuthData } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Suspense, memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { Navbar } from "@/widgets/Navbar";
import { BaseLayout } from "@/shared/layouts/BaseLayout";
import { AppLoaderLayout } from "@/shared/layouts/AppLoaderLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppRouter } from "./providers/router";
function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);
    useEffect(() => {
        if (!inited) {
            dispatch(initAuthData());
        }
    }, [dispatch, inited]);
    if (!inited) {
        return (_jsx("div", { id: "app", className: classNames("app", [theme], {}), children: _jsx(AppLoaderLayout, {}) }));
    }
    return (_jsxs("div", { id: "app", className: classNames("app", [theme], {}), children: [_jsx(Suspense, { fallback: "", children: _jsx(BaseLayout, { navbar: _jsx(Navbar, {}), content: _jsx(AppRouter, {}) }) }), _jsx(ToastContainer, { position: "bottom-right", hideProgressBar: true, theme: "colored" })] }));
}
export default memo(App);
