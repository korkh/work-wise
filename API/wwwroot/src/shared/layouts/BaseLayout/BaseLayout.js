import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./BaseLayout.module.scss";
export const BaseLayout = (props) => {
    const { className, content, navbar } = props;
    return (_jsxs("div", { className: classNames(cls.baseLayout, [className], {}), children: [_jsx("header", { className: cls.navbar, children: navbar }), _jsx("main", { className: cls.content, children: content })] }));
};
export default memo(BaseLayout);
