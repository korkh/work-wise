import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useEffect, useState } from "react";
import { useMobile } from "@/shared/lib/hooks/useMobile/useMobile";
import { TextHolder } from "../TextHolder";
import { ColumnStack } from "../Stack";
import { Modal } from "../Modal";
import { Drawer } from "../Drawer";
export const AppGreeting = memo(function AppGreeting() {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMobile();
    useEffect(() => {
        if (!localStorage.getItem("greeting")) {
            setIsOpen(true);
            localStorage.setItem("greeting", "greeting_activated");
        }
    }, []);
    const onClose = () => setIsOpen(false);
    const text = (_jsxs(ColumnStack, { gap: "32", align: "center", children: [_jsx(TextHolder, { variant: "error", size: "l", title: "Welcome on Work-Wise application" }), _jsx(TextHolder, { variant: "error", size: "m", text: "Application still in development progress but functional." }), _jsx(TextHolder, { variant: "error", size: "m", text: "Please visit 'About us' page and feel free to test app with credentials." })] }));
    if (isMobile) {
        return (_jsx(Drawer, { lazy: true, isOpen: isOpen, onClose: onClose, children: text }));
    }
    return (_jsx(Modal, { lazy: true, isOpen: isOpen, onClose: onClose, children: text }));
});
