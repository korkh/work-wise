import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./PageLoader.module.scss";
import { memo } from "react";
import { Loader } from "@/shared/ui/Loader";
const PageLoader = memo(function PageLoader(props) {
    const { className, ...otherProps } = props;
    return (_jsx("div", { className: classNames(cls.pageloader, [className], {}), ...otherProps, children: _jsx(Loader, {}) }));
});
export default PageLoader;
