import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./Loader.module.scss";
export function Loader(props) {
    const { className, ...otherProps } = props;
    return (_jsxs("div", { className: classNames(cls.lds, [className], {}), ...otherProps, children: [_jsx("div", {}), _jsx("div", {}), _jsx("div", {}), _jsx("div", {}), _jsx("div", {}), _jsx("div", {}), _jsx("div", {}), _jsx("div", {}), _jsx("div", {}), _jsx("div", {}), _jsx("div", {}), _jsx("div", {})] }));
}
