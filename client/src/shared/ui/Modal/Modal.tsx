import { Mods, classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./Modal.module.scss";
import { ReactNode, memo } from "react";
import { useModal } from "@/shared/lib/hooks/useModal/useModal";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Overlay } from "../Overlay";
import { Portal } from "../Portal";

interface ModalProps {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
	lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = memo(function Modal(props: ModalProps) {
	const { className, children, isOpen, onClose, lazy } = props;
	const { theme } = useTheme();

	const { close, isClosing, isMounted } = useModal({
		animationDelay: ANIMATION_DELAY,
		onClose,
		isOpen,
	});

	const mods: Mods = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing,
	};

	if (lazy && !isMounted) {
		return null;
	}

	return (
		<Portal element={document.getElementById("app") ?? document.body}>
			<div
				className={classNames(cls.modal, [className, theme, "app_modal"], mods)}
			>
				<Overlay onClick={close} />
				<div className={cls.content}>{children}</div>
			</div>
		</Portal>
	);
});
