import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./Drawer.module.scss";
import { memo, useCallback, useEffect } from "react";
import { MobileAnimationProvider, useMobileAnimationLibs, } from "@/shared/lib/context/AnimationProvider";
import { Portal } from "../Portal";
import { Overlay } from "../Overlay";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
const height = window.innerHeight - 100;
export const DrawerContent = memo(function DrawerContent(props) {
    const { spring, gesture } = useMobileAnimationLibs();
    const [{ y }, api] = spring.useSpring(() => ({ y: height }));
    const { theme } = useTheme();
    const { className, children, onClose, isOpen } = props;
    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);
    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [api, isOpen, openDrawer]);
    const close = (velocity = 0) => {
        if (!isNaN(height)) {
            api.start({
                y: height,
                immediate: false,
                config: { ...spring.config.stiff, velocity },
                onResolve: onClose,
            });
        }
    };
    const bind = gesture.useDrag(({ last, velocity: [, vy], direction: [, dy], movement: [, my], cancel, }) => {
        if (my < -70)
            cancel();
        if (last) {
            if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                close();
            }
            else {
                openDrawer();
            }
        }
        else {
            api.start({ y: my, immediate: true });
        }
    }, {
        from: () => [0, y.get()],
        filterTaps: true,
        bounds: { top: 0 },
        rubberband: true,
    });
    if (!isOpen) {
        return null;
    }
    const display = y.to((py) => (py < height ? "block" : "none"));
    return (_jsx(Portal, { element: document.getElementById("app") ?? document.body, children: _jsxs("div", { className: classNames(cls.Drawer, [className, theme, "app_drawer"], {}), children: [_jsx(Overlay, { onClick: close }), _jsx(spring.a.div, { className: cls.sheet, style: { display, bottom: `calc(-100vh + ${height - 100}px)`, y }, ...bind(), children: children })] }) }));
});
const DrawerAsync = (props) => {
    const { isLoaded } = useMobileAnimationLibs();
    if (!isLoaded) {
        return null;
    }
    return _jsx(DrawerContent, { ...props });
};
export const Drawer = (props) => {
    return (_jsx(MobileAnimationProvider, { children: _jsx(DrawerAsync, { ...props }) }));
};
