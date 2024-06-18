import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./SignInModal.module.scss";
import { Loader } from "@/shared/ui/Loader";
import { Modal } from "@/shared/ui/Modal";
import { Suspense } from "react";
import { SignInFormAsync } from "../SignInForm/SignInForm.async";
export function SignInModal({ className, isOpen, onClose }) {
    return (_jsx(Modal, { className: classNames(cls.LoginModal, [className], {}), isOpen: isOpen, onClose: onClose, lazy: true, children: _jsx(Suspense, { fallback: _jsx(Loader, {}), children: _jsx(SignInFormAsync, { onSuccess: onClose }) }) }));
}
