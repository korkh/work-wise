import { UserRole } from "@/entities/User";
import { AboutPage } from "@/pages/AboutPage";
import { AccountantPanelPage } from "@/pages/AccountantPanelPage";
import { AdminPanelPage } from "@/pages/AdminPanelPage";
import {
	BusinessTripDetails,
	BusinessTripsPage,
	BusinessTripsSummariesPage,
} from "@/pages/BusinessTripsData";
import {
	DocumentsPage,
	DocumentCreatePage,
	DocumentDeletePage,
	DocumentDetailsPage,
} from "@/pages/DocumentsData";
import { EmployeeTimeTablePage } from "@/pages/EmployeeTimeCardPage";
import {
	EmployeesPage,
	EmployeeDetailsPage,
	EmployeeCreatePage,
	EmployeeDeletePage,
} from "@/pages/EmployeesData";
import { ErrorPage } from "@/pages/ErrorPage";

import { ForbiddenPage } from "@/pages/ForbiddenPage";
import { MainPage } from "@/pages/MainPage";
import { ManagerPanelPage } from "@/pages/ManagerPanelPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { PayrollsPage, PayrollDetailsPage } from "@/pages/PayrollsData";
import { ProfilePage } from "@/pages/Profiles";

import { SettingsPage } from "@/pages/SettingsPage";
import {
	AppRoutes,
	getRouteAbout,
	getRouteAccountant,
	getRouteAdmin,
	getRouteBusinessTripDetails,
	getRouteBusinessTrips,
	getRouteBusinessTripsSummaries,
	getRouteDocumentCreate,
	getRouteDocumentDelete,
	getRouteDocumentDetails,
	getRouteDocuments,
	getRouteEmployeeCreate,
	getRouteEmployeeDelete,
	getRouteEmployeeDetails,
	getRouteEmployeeTimeCard,
	getRouteEmployees,
	getRouteError,
	getRouteForbidden,
	getRouteMain,
	getRouteManager,
	getRouteNotFound,
	getRoutePayrollDetails,
	getRoutePayrolls,
	getRouteProfile,
	getRouteSettings,
} from "@/shared/consts/routerConsts";
import { AppRoutesProps } from "@/shared/types/router";

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.MAIN]: {
		path: getRouteMain(),
		element: <MainPage />,
	},
	[AppRoutes.ABOUT]: {
		path: getRouteAbout(),
		element: <AboutPage />,
	},
	[AppRoutes.PROFILE]: {
		path: getRouteProfile(":id"),
		element: <ProfilePage />,
	},
	[AppRoutes.EMPLOYEES]: {
		path: getRouteEmployees(),
		element: <EmployeesPage />,
		authOnly: true,
	},
	[AppRoutes.EMPLOYEE_DETAILS]: {
		path: getRouteEmployeeDetails(":id"),
		element: <EmployeeDetailsPage />,
		authOnly: true,
	},
	[AppRoutes.EMPLOYEE_CREATE]: {
		path: getRouteEmployeeCreate(),
		element: <EmployeeCreatePage />,
		authOnly: true,
		roles: [UserRole.ADMIN],
	},
	[AppRoutes.EMPLOYEE_DELETE]: {
		path: getRouteEmployeeDelete(":id"),
		element: <EmployeeDeletePage />,
		authOnly: true,
		roles: [UserRole.ADMIN],
	},
	[AppRoutes.EMPLOYEE_TIME_CARD]: {
		path: getRouteEmployeeTimeCard(),
		element: <EmployeeTimeTablePage />,
		authOnly: true,
		roles: [UserRole.ACCOUNTANT],
	},
	[AppRoutes.DOCUMENTS]: {
		path: getRouteDocuments(),
		element: <DocumentsPage />,
		authOnly: true,
		roles: [UserRole.ADMIN],
	},
	[AppRoutes.DOCUMENT_DETAILS]: {
		path: getRouteDocumentDetails(":id"),
		element: <DocumentDetailsPage />,
		authOnly: true,
		roles: [UserRole.ADMIN],
	},
	[AppRoutes.DOCUMENT_CREATE]: {
		path: getRouteDocumentCreate(),
		element: <DocumentCreatePage />,
		authOnly: true,
		roles: [UserRole.ADMIN],
	},
	[AppRoutes.DOCUMENT_DELETE]: {
		path: getRouteDocumentDelete(":id"),
		element: <DocumentDeletePage />,
		authOnly: true,
		roles: [UserRole.ADMIN],
	},
	[AppRoutes.PAYROLLS]: {
		path: getRoutePayrolls(),
		element: <PayrollsPage />,
		authOnly: true,
		roles: [UserRole.ACCOUNTANT],
	},
	[AppRoutes.PAYROLL_DETAILS]: {
		path: getRoutePayrollDetails(":id"),
		element: <PayrollDetailsPage />,
		authOnly: true,
		roles: [UserRole.ACCOUNTANT],
	},
	[AppRoutes.BUSINESS_TRIPS]: {
		path: getRouteBusinessTrips(),
		element: <BusinessTripsPage />,
		authOnly: true,
		roles: [UserRole.ACCOUNTANT],
	},
	[AppRoutes.BUSINESS_TRIPS_SUMMARIES]: {
		path: getRouteBusinessTripsSummaries(),
		element: <BusinessTripsSummariesPage />,
		authOnly: true,
		roles: [UserRole.ACCOUNTANT],
	},
	[AppRoutes.BUSINESS_TRIP_DETAILS]: {
		path: getRouteBusinessTripDetails(":id"),
		element: <BusinessTripDetails />,
		authOnly: true,
		roles: [UserRole.ACCOUNTANT],
	},
	[AppRoutes.ADMIN_PANEL]: {
		path: getRouteAdmin(),
		element: <AdminPanelPage />,
		authOnly: true,
		roles: [UserRole.ADMIN],
	},
	[AppRoutes.MANAGER_PANEL]: {
		path: getRouteManager(),
		element: <ManagerPanelPage />,
		authOnly: true,
		roles: [UserRole.MANAGER],
	},
	[AppRoutes.ACCOUNTANT_PANEL]: {
		path: getRouteAccountant(),
		element: <AccountantPanelPage />,
		authOnly: true,
		roles: [UserRole.ACCOUNTANT],
	},
	[AppRoutes.SETTINGS]: {
		path: getRouteSettings(),
		element: <SettingsPage />,
		authOnly: true,
	},
	[AppRoutes.FORBIDDEN]: {
		path: getRouteForbidden(),
		element: <ForbiddenPage />,
	},
	[AppRoutes.ERROR]: {
		path: getRouteError(),
		element: <ErrorPage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: getRouteNotFound(),
		element: <NotFoundPage />,
	},
};
