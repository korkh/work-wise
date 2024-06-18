import { getRouteAbout, getRouteBusinessTrips, getRouteDocuments, getRouteEmployeeTimeCard, getRouteEmployees, getRouteMain, getRoutePayrolls, getRouteProfile, } from "@/shared/consts/routerConsts";
import { useTranslation } from "react-i18next";
export const useNavbarItems = ({ userData }) => {
    const { t } = useTranslation("navbar");
    const sidebarItemsList = [
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
        sidebarItemsList.push({
            path: getRouteProfile(userData.nameid),
            text: t("Profile"),
            authOnly: true,
        }, {
            path: getRouteEmployees(),
            text: t("Employees"),
            authOnly: true,
        }, {
            path: getRoutePayrolls(),
            text: t("Payrolls"),
            authOnly: true,
        }, {
            path: getRouteBusinessTrips(),
            text: t("Business trips"),
            authOnly: true,
        }, {
            path: getRouteEmployeeTimeCard(),
            text: t("Timecards"),
            authOnly: true,
        });
    }
    if (userData && userData.role?.includes("Admin")) {
        sidebarItemsList.push({
            path: getRouteProfile(userData.nameid),
            text: t("Profile"),
            authOnly: true,
        }, {
            path: getRouteEmployees(),
            text: t("Employees"),
            authOnly: true,
        }, {
            path: getRouteDocuments(),
            text: t("Documents"),
            authOnly: true,
        });
    }
    return sidebarItemsList;
};
