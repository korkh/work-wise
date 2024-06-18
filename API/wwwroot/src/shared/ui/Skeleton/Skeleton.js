import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./Skeleton.module.scss";
export const Skeleton = memo(function Skeleton(props) {
    const { className, height, width, border } = props;
    const styles = {
        width,
        height,
        borderRadius: border,
    };
    return (_jsx("div", { className: classNames(cls.Skeleton, [className], {}), style: styles }));
});
