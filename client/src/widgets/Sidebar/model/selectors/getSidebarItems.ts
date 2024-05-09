import { SidebarItemType } from "../types/sidebar_types";
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
import { useAuthToken } from "@/shared/lib/hooks/useAuthToken/useAuthToken";

export const useSidebarItems = () => {
	const userData = useAuthToken();

	const sidebarItemsList: SidebarItemType[] = [
		{
			path: getRouteMain(),
			Icon: HomePage,
			text: "Main page",
		},
		{
			path: getRouteAbout(),
			Icon: AboutPage,
			text: "About page",
		},
	];

	if (userData && userData.role?.includes("Accountant")) {
		sidebarItemsList.push(
			{
				path: getRouteProfile(userData.nameid),
				Icon: ProfilePage,
				text: "Profile page",
				authOnly: true,
			},
			{
				path: getRouteEmployees(),
				Icon: Employees,
				text: "Employees page",
				authOnly: true,
			},
			{
				path: getRoutePayrolls(),
				Icon: Payrolls,
				text: "Payrolls page",
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
