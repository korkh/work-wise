import {
	getRouteAbout,
	getRouteBusinessTrips,
	getRouteDocuments,
	getRouteEmployeeTimeCard,
	getRouteEmployees,
	getRouteMain,
	getRoutePayrolls,
	getRouteProfile,
} from "@/shared/consts/routerConsts";
import { NavbarItemType } from "../types/navbar_items";
import { JwtPayload } from "@/shared/types/token";
import { useTranslation } from "react-i18next";

interface NavbarHookProps {
	userData: JwtPayload | null;
}

export const useNavbarItems = ({ userData }: NavbarHookProps) => {
	const { t } = useTranslation("navbar");

	const sidebarItemsList: NavbarItemType[] = [
		{
			path: getRouteMain(),
			text: t("Main"),
		},
		{
			path: getRouteAbout(),
			text: t("About us"),
		},
	];

	if (userData && userData.role?.includes("Accountant")) {
		sidebarItemsList.push(
			{
				path: getRouteProfile(userData.nameid),
				text: t("Profile"),
				authOnly: true,
			},
			{
				path: getRouteEmployees(),
				text: t("Employees"),
				authOnly: true,
			},
			{
				path: getRoutePayrolls(),
				text: t("Payrolls"),
				authOnly: true,
			},
			{
				path: getRouteBusinessTrips(),
				text: t("Business trips"),
				authOnly: true,
			},
			{
				path: getRouteEmployeeTimeCard(),
				text: t("Timecards"),
				authOnly: true,
			}
		);
	}

	if (userData && userData.role?.includes("Admin")) {
		sidebarItemsList.push(
			{
				path: getRouteProfile(userData.nameid),
				text: t("Profile"),
				authOnly: true,
			},
			{
				path: getRouteEmployees(),
				text: t("Employees"),
				authOnly: true,
			},
			{
				path: getRouteDocuments(),
				text: t("Documents"),
				authOnly: true,
			}
		);
	}

	return sidebarItemsList;
};
