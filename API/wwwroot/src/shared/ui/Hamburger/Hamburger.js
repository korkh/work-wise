import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./Hamburger.module.scss";
export const Hamburger = (props) => {
    const { className, isOpen, toggle } = props;
    return (_jsxs("div", { className: classNames(cls.hamburger, [className]), onClick: toggle, children: [_jsx("div", { className: isOpen ? cls.bar1Open : cls.bar1 }), _jsx("div", { className: isOpen ? cls.bar2Open : cls.bar2 }), _jsx("div", { className: isOpen ? cls.bar3Open : cls.bar3 })] }));
};
