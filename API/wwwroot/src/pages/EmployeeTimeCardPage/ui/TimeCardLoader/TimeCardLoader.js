import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { ColumnStack } from "@/shared/ui/Stack";
import { Skeleton } from "@/shared/ui/Skeleton";
export const TimeCardLoader = memo(function TimeCardLoader() {
    return (_jsxs(ColumnStack, { gap: "16", style: { height: "100%" }, max: true, children: [_jsx(Skeleton, { width: "80%", height: "40%", border: "16px" }), _jsx(Skeleton, { width: "80%", height: "40%", border: "16px" }), _jsx(Skeleton, { width: "80%", height: "40%", border: "16px" }), _jsx(Skeleton, { width: "80%", height: "40%", border: "16px" }), _jsx(Skeleton, { width: "80%", height: "40%", border: "16px" }), _jsx(Skeleton, { width: "80%", height: "40%", border: "16px" })] }));
});
