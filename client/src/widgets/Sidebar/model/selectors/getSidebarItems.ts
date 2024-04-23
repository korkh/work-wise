import { getUserAuthData } from "@/entities/User";
import { useSelector } from "react-redux";
import { SidebarItemType } from "../types/sidebar_types";
import {
	getRouteAbout,
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

export const useSidebarItems = () => {
	const userData = useSelector(getUserAuthData);
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

	if (userData) {
		sidebarItemsList.push(
			{
				path: getRouteProfile(userData.id),
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

	return sidebarItemsList;
};
