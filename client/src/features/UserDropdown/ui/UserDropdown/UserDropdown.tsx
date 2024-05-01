import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getUserAuthData,
	isUserAccountant,
	isUserAdmin,
	isUserManager,
	userActions,
} from "@/entities/User";
import {
	getRouteAccountant,
	getRouteAdmin,
	getRouteManager,
	getRouteProfile,
	getRouteSettings,
} from "@/shared/consts/routerConsts";
import { Dropdown } from "@/shared/ui/Popups/ui/Dropdown";
import { Avatar } from "@/shared/ui/Avatar";
import { stopRefreshTokenTimer } from "@/shared/lib/utils/url/refreshTokenTimer/refreshTokenTimer";

interface UserDropdownProps {
	className?: string;
}

export const UserDropdown = memo(function UserDropdown(
	props: UserDropdownProps
) {
	const { className } = props;
	const { t } = useTranslation();

	const dispatch = useDispatch();
	const isAdmin = useSelector(isUserAdmin);
	const isAccountant = useSelector(isUserAccountant);
	const isManager = useSelector(isUserManager);
	const authData = useSelector(getUserAuthData);

	const onLogout = useCallback(() => {
		stopRefreshTokenTimer();
		dispatch(userActions.signOut());
	}, [dispatch]);

	if (!authData) {
		return null;
	}

	const items = [
		...(isAdmin ? [{ content: t("Admin panel"), href: getRouteAdmin() }] : []),
		...(isManager
			? [{ content: t("Manager panel"), href: getRouteManager() }]
			: []),
		...(isAccountant
			? [{ content: t("Accountant panel"), href: getRouteAccountant() }]
			: []),
		{
			content: t("Profile"),
			href: getRouteProfile(authData.id),
		},
		{
			content: t("Settings"),
			href: getRouteSettings(),
		},
		{
			content: t("Sign out"),
			onClick: onLogout,
		},
	];

	return (
		<Dropdown
			direction="bottom left"
			className={classNames("", [className], {})}
			items={items}
			trigger={<Avatar size={40} src={authData.image} />}
		/>
	);
});
