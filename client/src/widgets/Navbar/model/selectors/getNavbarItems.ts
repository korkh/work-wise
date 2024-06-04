import {
	getRouteAbout,
	getRouteDocuments,
	getRouteEmployeeTimeCard,
	getRouteEmployees,
	getRouteMain,
	getRoutePayrolls,
	getRouteProfile,
} from "@/shared/consts/routerConsts";
import { NavbarItemType } from "../types/navbar_items";
import { JwtPayload } from "@/shared/types/token";

interface NavbarHookProps {
	userData: JwtPayload | null;
}

export const useNavbarItems = ({ userData }: NavbarHookProps) => {
	const sidebarItemsList: NavbarItemType[] = [
		{
			path: getRouteMain(),
			text: "Main",
		},
		{
			path: getRouteAbout(),
			text: "About",
		},
	];

	if (userData && userData.role?.includes("Accountant")) {
		sidebarItemsList.push(
			{
				path: getRouteProfile(userData.nameid),
				text: "Profile",
				authOnly: true,
			},
			{
				path: getRouteEmployees(),
				text: "Employees",
				authOnly: true,
			},
			{
				path: getRoutePayrolls(),
				text: "Payrolls",
				authOnly: true,
			},
			{
				path: getRouteEmployeeTimeCard(),
				text: "Timecard",
				authOnly: true,
			}
		);
	}

	if (userData && userData.role?.includes("Admin")) {
		sidebarItemsList.push(
			{
				path: getRouteProfile(userData.nameid),
				text: "Profile",
				authOnly: true,
			},
			{
				path: getRouteEmployees(),
				text: "Employees",
				authOnly: true,
			},
			{
				path: getRouteDocuments(),
				text: "Documents",
				authOnly: true,
			}
		);
	}

	return sidebarItemsList;
};
