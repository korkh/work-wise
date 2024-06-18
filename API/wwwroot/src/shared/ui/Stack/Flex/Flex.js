import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./Flex.module.scss";
const justifyClasses = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};
const alignClasses = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};
const directionClasses = {
    row: cls.directionRow,
    column: cls.directionColumn,
};
const gapClasses = {
    4: cls.gap4,
    6: cls.gap6,
    8: cls.gap8,
    10: cls.gap10,
    12: cls.gap12,
    14: cls.gap14,
    16: cls.gap16,
    18: cls.gap18,
    20: cls.gap20,
    22: cls.gap22,
    24: cls.gap24,
    32: cls.gap32,
    50: cls.gap50,
};
export const Flex = (props) => {
    const { className, children, justify = "start", align = "center", direction = "row", wrap = "nowrap", gap, max, width, ...otherProps } = props;
    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        cls[wrap],
        gap && gapClasses[gap],
    ];
    const mods = {
        [cls.max]: max,
    };
    return (_jsx("div", { className: classNames(cls.Flex, classes, mods), style: { width }, ...otherProps, children: children }));
};
