import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import cls from "./Section.module.scss";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { mapPaddingToClass } from "./maps/sectionMaps";
export const Section = memo(function Card(props) {
    const { className, children, variant = "normal", max, padding = "8", border = "normal", fullHeight, as: Component = "div", ...otherProps } = props;
    const paddingClass = mapPaddingToClass[padding];
    return (_jsx(Component, { className: classNames(cls.section, [className, cls[variant], cls[paddingClass], cls[border]], {
            [cls.max]: max,
            [cls.fullHeight]: fullHeight,
        }), ...otherProps, children: children }));
});
