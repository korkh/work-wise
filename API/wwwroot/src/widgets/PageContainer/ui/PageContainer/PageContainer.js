import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import cls from "./PageContainer.module.scss";
import { getUIScrollByPath, uiActions } from "@/features/UI";
import { useInitEffect } from "@/shared/lib/hooks/useInitEffect/useInitEffect";
import { useThrottle } from "@/shared/lib/hooks/useThrottle/useThrottle";
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
export const PAGE_ID = "PAGE_ID";
export const PageContainer = memo(function PageContainer(props) {
    const { className, children, height = "85vh", onScrollEnd, center } = props;
    const wrapperRef = useRef();
    const triggerRef = useRef();
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state) => getUIScrollByPath(state, pathname));
    useInfiniteScroll({
        triggerRef,
        wrapperRef: undefined,
        callback: onScrollEnd,
    });
    useInitEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });
    const onScroll = useThrottle((e) => {
        dispatch(uiActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);
    const mods = {
        [cls.center]: center,
    };
    return (_jsxs("main", { style: { height: height }, ref: wrapperRef, className: classNames(cls.Page, [className], mods), onScroll: onScroll, id: PAGE_ID, "data-testid": props["data-testid"] ?? "Page", children: [children, onScrollEnd ? _jsx("div", { className: cls.trigger, ref: triggerRef }) : null] }));
});
