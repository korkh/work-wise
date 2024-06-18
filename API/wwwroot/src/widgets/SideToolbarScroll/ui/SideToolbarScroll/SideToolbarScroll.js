import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./SideToolbarScroll.module.scss";
import { memo } from "react";
import { RowStack } from "@/shared/ui/Stack";
import { ReturnToTopButton } from "@/features/ReturnToTopButton";
export const SideToolbarScroll = memo(function SideToolbarScroll(props) {
    const { className } = props;
    return (_jsx(RowStack, { justify: "center", align: "center", max: true, className: classNames(cls.sideToolbarScroll, [className], {}), children: _jsx(ReturnToTopButton, {}) }));
});
