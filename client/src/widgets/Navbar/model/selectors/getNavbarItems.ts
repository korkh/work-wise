import {
	getRouteAbout,
	getRouteDocuments,
	getRouteEmployees,
	getRouteMain,
	getRoutePayrolls,
	getRouteProfile,
} from "@/shared/consts/routerConsts";
import HomePage from "@/shared/assets/icons/home-page-icon.svg?react";
import AboutPage from "@/shared/assets/icons/about-page-icon.svg?react";
import ProfilePage from "@/shared/assets/icons/profile-page-icon.svg?react";
import Payrolls from "@/shared/assets/icons/payroll.svg?react";
import Employees from "@/shared/assets/icons/employees.svg?react";
import Documents from "@/shared/assets/icons/documents.svg?react";
import { NavbarItemType } from "../types/navbar_items";
import { JwtPayload } from "@/shared/types/token";

interface NavbarHookProps {
	userData: JwtPayload | null;
}

export const useNavbarItems = ({ userData }: NavbarHookProps) => {
	const sidebarItemsList: NavbarItemType[] = [
		{
			path: getRouteMain(),
			Icon: HomePage,
			text: "Main",
		},
		{
			path: getRouteAbout(),
			Icon: AboutPage,
			text: "About",
		},
	];

	if (userData && userData.role?.includes("Accountant")) {
		sidebarItemsList.push(
			{
				path: getRouteProfile(userData.nameid),
				Icon: ProfilePage,
				text: "Profile",
				authOnly: true,
			},
			{
				path: getRouteEmployees(),
				Icon: Employees,
				text: "Employees",
				authOnly: true,
			},
			{
				path: getRoutePayrolls(),
				Icon: Payrolls,
				text: "Payrolls",
				authOnly: true,
			}
		);
	}

	if (userData && userData.role?.includes("Admin")) {
		sidebarItemsList.push(
			{
				path: getRouteProfile(userData.nameid),
				Icon: ProfilePage,
				text: "Profile",
				authOnly: true,
			},
			{
				path: getRouteEmployees(),
				Icon: Employees,
				text: "Employees",
				authOnly: true,
			},
			{
				path: getRouteDocuments(),
				Icon: Documents,
				text: "Documents",
				authOnly: true,
			}
		);
	}

	return sidebarItemsList;
};
