import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { getUserAuthData } from "@/entities/User";
import { useSelector } from "react-redux";
import { Button } from "@/shared/ui/Button";
import { SignInModal } from "@/features/LoginAuth";
import { RowStack } from "@/shared/ui/Stack";
import { UserDropdown } from "@/features/UserDropdown";

interface NavbarProps {
	className?: string;
}

export const Navbar = memo(function Navbar({ className }: NavbarProps) {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getUserAuthData);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	if (authData) {
		return (
			<header className={classNames(cls.Navbar, [className], {})}>
				<RowStack gap="16" className={cls.actions}>
					<UserDropdown />
				</RowStack>
			</header>
		);
	}

	return (
		<header className={classNames(cls.Navbar, [className], {})}>
			<Button variant="clear" className={cls.links} onClick={onShowModal}>
				{t("Sign in")}
			</Button>
			{isAuthModal && (
				<SignInModal isOpen={isAuthModal} onClose={onCloseModal} />
			)}
		</header>
	);
});
