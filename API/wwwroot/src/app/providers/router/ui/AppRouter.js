import { jsx as _jsx } from "react/jsx-runtime";
import { memo, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../routeConfig/routeConfig";
import { PageLoader } from "@/widgets/PageLoader";
import { RequireAuth } from "./ReuireAuth";
const AppRouter = () => {
    const renderWithWrapper = useCallback((route) => {
        const element = (_jsx(Suspense, { fallback: _jsx(PageLoader, {}), children: route.element }));
        return (_jsx(Route, { path: route.path, element: route.authOnly ? (_jsx(RequireAuth, { roles: route.roles, children: element })) : (element) }, route.path));
    }, []);
    return _jsx(Routes, { children: Object.values(routeConfig).map(renderWithWrapper) });
};
export default memo(AppRouter);
