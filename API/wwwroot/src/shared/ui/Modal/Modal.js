import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./Modal.module.scss";
import { memo } from "react";
import { useModal } from "@/shared/lib/hooks/useModal/useModal";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Overlay } from "../Overlay";
import { Portal } from "../Portal";
const ANIMATION_DELAY = 300;
export const Modal = memo(function Modal(props) {
    const { className, children, isOpen, onClose, lazy } = props;
    const { theme } = useTheme();
    const { close, isClosing, isMounted } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });
    const mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };
    if (lazy && !isMounted) {
        return null;
    }
    return (_jsx(Portal, { element: document.getElementById("app") ?? document.body, children: _jsxs("div", { className: classNames(cls.modal, [className, theme, "app_modal"], mods), children: [_jsx(Overlay, { onClick: close }), _jsx("div", { className: cls.content, children: children })] }) }));
});
