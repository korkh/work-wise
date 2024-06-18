import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Skeleton } from "@/shared/ui/Skeleton";
import { ColumnStack, RowStack } from "@/shared/ui/Stack";
import { BaseLayout } from "../BaseLayout";
import cls from "./AppLoaderLayout.module.scss";
import { memo } from "react";
export const AppLoaderLayout = memo(function AppLoaderLayout() {
    return (_jsx(BaseLayout, { navbar: _jsx(RowStack, { className: cls.header, children: _jsx(Skeleton, { width: "100%", height: 40, border: "50%" }) }), content: _jsxs(ColumnStack, { gap: "16", style: { height: "100%" }, children: [_jsx(Skeleton, { width: "70%", height: 32, border: "16px" }), _jsx(Skeleton, { width: "40%", height: 20, border: "16px" }), _jsx(Skeleton, { width: "50%", height: 20, border: "16px" }), _jsx(Skeleton, { width: "30%", height: 32, border: "16px" }), _jsx(Skeleton, { width: "80%", height: "40%", border: "16px" }), _jsx(Skeleton, { width: "80%", height: "40%", border: "16px" })] }) }));
});
