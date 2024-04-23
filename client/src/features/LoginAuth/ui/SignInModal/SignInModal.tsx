import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./SignInModal.module.scss";
import { Loader } from "@/shared/ui/Loader";
import { Modal } from "@/shared/ui/Modal";
import { Suspense } from "react";
import { SignInFormAsync } from "../SignInForm/SignInForm.async";

interface LoginModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export function SignInModal({ className, isOpen, onClose }: LoginModalProps) {
	return (
		<Modal
			className={classNames(cls.LoginModal, [className], {})}
			isOpen={isOpen}
			onClose={onClose}
			lazy
		>
			<Suspense fallback={<Loader />}>
				<SignInFormAsync onSuccess={onClose} />
			</Suspense>
		</Modal>
	);
}
