import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar } from "../../../../../shared/ui/Avatar";
import cls from "./TableCellRenderer.module.scss";
import { truncateString } from "@/shared/lib/utils/table/truncateString/truncateString";
export function TableCellRenderer(item, column) {
    const { key, nestedKeys, render } = column;
    // Traverse nested keys to get the final value
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getNestedValue = (obj, keys) => {
        return keys.reduce((value, k) => (value && value[k] !== undefined ? value[k] : null), obj);
    };
    const value = nestedKeys ? getNestedValue(item[key], nestedKeys) : item[key];
    // Use custom render function if provided
    if (render) {
        return render(value, item);
    }
    if (nestedKeys && nestedKeys.includes("avatar")) {
        return _jsx(Avatar, { src: String(value), size: 40, alt: "Avatar" });
    }
    if (key === "avatar") {
        return _jsx(Avatar, { src: String(value), size: 40, alt: "Avatar" });
    }
    if (value && typeof value === "object") {
        return JSON.stringify(value);
    }
    const stringValue = String(value);
    const maxLength = 20;
    return (_jsxs("div", { className: cls.cellWithTooltip, children: [_jsx("span", { children: truncateString(stringValue, maxLength) }), stringValue.length > maxLength && (_jsx("span", { className: cls.tooltip, children: stringValue }))] }));
}
