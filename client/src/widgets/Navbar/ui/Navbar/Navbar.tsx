import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Button } from "@/shared/ui/Button";
import { SignInModal } from "@/features/LoginAuth";
import { UserDropdown } from "@/features/UserDropdown";
import { useNavbarItems } from "../../model/selectors/getNavbarItems";
import { useAuthToken } from "@/shared/lib/hooks/useAuthToken/useAuthToken";
import { NavbarItem } from "../NavbarItem";
import { AppLogo } from "@/shared/ui/AppLogo";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { RowStack } from "@/shared/ui/Stack";
import { getUserAuthData } from "@/entities/User";
import { useSelector } from "react-redux";
import { LanguageSwitcher } from "@/features/LanguageSwitcher";
import {
	getRouteBusinessTrips,
	getRouteBusinessTripsSummaries,
} from "@/shared/consts/routerConsts";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { Hamburger } from "@/shared/ui/Hamburger";
import { useMobile } from "@/shared/lib/hooks/useMobile/useMobile";

interface NavbarProps {
	className?: string;
}

const Navbar = memo(function Navbar({ className }: NavbarProps) {
	const { t } = useTranslation("navbar");
	const [isAuthModal, setIsAuthModal] = useState(false);
	const userData = useAuthToken();
	const userAuth = useSelector(getUserAuthData);
	const [activeItem, setActiveItem] = useState<string | null>(null);
	const [isOpen, setIsOpen] = useState(false);
	const navbarItemsList = useNavbarItems({ userData });
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const isMobile = useMobile();

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	const toggleDropdown = () => {
		setIsOpen((prev) => !prev);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node)
		) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const itemsList = useMemo(() => {
		const dropdownItems = [
			{
				content: t("Business trips summaries"),
				href: getRouteBusinessTripsSummaries(),
				onClick: () => {
					setActiveItem(getRouteBusinessTripsSummaries());
					setIsOpen(false);
				},
			},
			{
				content: t("Business trips"),
				href: getRouteBusinessTrips(),
				onClick: () => {
					setActiveItem(getRouteBusinessTrips());
					setIsOpen(false);
				},
			},
		];
		return navbarItemsList.map((item) => {
			if (item.text === "Business trips" || item.text === "Komandiruotės") {
				return (
					<NavbarItem
						item={item}
						key={item.path}
						dropDownItems={dropdownItems}
						activeItem={activeItem}
						setActiveItem={(path) => {
							setActiveItem(path);
							setIsOpen(false);
						}}
					/>
				);
			}
			return (
				<NavbarItem
					item={item}
					key={item.path}
					activeItem={activeItem}
					setActiveItem={(path) => {
						setActiveItem(path);
						setIsOpen(false);
					}}
				/>
			);
		});
	}, [activeItem, navbarItemsList, t]);

	return (
		<RowStack
			gap="32"
			className={classNames(cls.navbar, [className], {})}
			justify="between"
			align="center"
		>
			<RowStack gap="32" className={cls.items}>
				<AppLogo width={100} height={50} className={cls.appLogo} />
			</RowStack>
			{isMobile && <Hamburger isOpen={isOpen} toggle={toggleDropdown} />}
			<RowStack gap="32" className={cls.navItems}>
				{itemsList}
			</RowStack>
			{isOpen && (
				<div className={cls.dropdownMenu} ref={dropdownRef}>
					{itemsList}
				</div>
			)}
			{userAuth ? (
				<RowStack gap="32" className={cls.actions} align="center">
					<ThemeSwitcher />
					<LanguageSwitcher abbreviated className={cls.lang} />
					<span>
						{t("Welcome")}&nbsp;
						{userAuth.displayName}
					</span>
					<UserDropdown />
				</RowStack>
			) : (
				<RowStack gap="32">
					<ThemeSwitcher />
					<LanguageSwitcher abbreviated className={cls.lang} />
					<Button variant="clear" className={cls.links} onClick={onShowModal}>
						{t("Sign in")}
					</Button>
				</RowStack>
			)}
			{isAuthModal && (
				<SignInModal isOpen={isAuthModal} onClose={onCloseModal} />
			)}
		</RowStack>
	);
});

export default Navbar;
