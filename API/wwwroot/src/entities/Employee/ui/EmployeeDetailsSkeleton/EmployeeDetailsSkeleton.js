import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Skeleton } from "@/shared/ui/Skeleton";
import { RowStack } from "@/shared/ui/Stack";
import { Section } from "@/shared/ui/Section";
const EmployeeDetailsSkeleton = () => {
    return (_jsx(Section, { padding: "24", max: true, children: _jsxs(RowStack, { gap: "32", children: [_jsx(RowStack, { max: true, justify: "center", children: _jsx(Skeleton, { border: "100%", width: 128, height: 128 }) }), _jsxs(RowStack, { gap: "32", max: true, children: [_jsxs(RowStack, { gap: "16", max: true, children: [_jsx(Skeleton, { width: "100%", height: 38 }), _jsx(Skeleton, { width: "100%", height: 38 }), _jsx(Skeleton, { width: "100%", height: 38 }), _jsx(Skeleton, { width: "100%", height: 38 })] }), _jsxs(RowStack, { gap: "16", max: true, children: [_jsx(Skeleton, { width: "100%", height: 38 }), _jsx(Skeleton, { width: "100%", height: 38 }), _jsx(Skeleton, { width: "100%", height: 38 }), _jsx(Skeleton, { width: "100%", height: 38 })] })] })] }) }));
};
export default EmployeeDetailsSkeleton;
