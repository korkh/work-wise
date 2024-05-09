import { UserRole } from "@/entities/User";
import { AboutPage } from "@/pages/AboutPage";
import { AccountantPanelPage } from "@/pages/AccountantPanelPage";
import { AdminPanelPage } from "@/pages/AdminPanelPage";
import {
	DocumentsPage,
	DocumentCreatePage,
	DocumentEditPage,
	DocumentDeletePage,
	DocumentDetailsPage,
} from "@/pages/DocumentsData";
import {
	EmployeesPage,
	EmployeeDetailsPage,
	EmployeeCreatePage,
	EmployeeEditPage,
	EmployeeDeletePage,
} from "@/pages/EmployeesData";
import { ErrorPage } from "@/pages/ErrorPage";

import { ForbiddenPage } from "@/pages/ForbiddenPage";
import { MainPage } from "@/pages/MainPage";
import { ManagerPanelPage } from "@/pages/ManagerPanelPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import {
	PayrollsPage,
	PayrollDetailsPage,
	PayrollCreatePage,
	PayrollEditPage,
	PayrollDeletePage,
} from "@/pages/PayrollsData";
import { ProfilePage } from "@/pages/Profiles";

import { SettingsPage } from "@/pages/SettingsPage";
import {
	AppRoutes,
	getRouteAbout,
	getRouteAccountant,
	getRouteAdmin,
	getRouteDocumentCreate,
	getRouteDocumentDelete,
	getRouteDocumentDetails,
	getRouteDocumentEdit,
	getRouteDocuments,
	getRouteEmployeeCreate,
	getRouteEmployeeDelete,
	getRouteEmployeeDetails,
	getRouteEmployeeEdit,
	getRouteEmployees,
	getRouteError,
	getRouteForbidden,
	getRouteMain,
	getRouteManager,
	getRouteNotFound,
	getRoutePayrollCreate,
	getRoutePayrollDelete,
	getRoutePayrollDetails,
	getRoutePayrollEdit,
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
	[AppRoutes.EMPLOYEE_EDIT]: {
		path: getRouteEmployeeEdit(":id"),
		element: <EmployeeEditPage />,
		authOnly: true,
		roles: [UserRole.ADMIN],
	},
	[AppRoutes.EMPLOYEE_DELETE]: {
		path: getRouteEmployeeDelete(":id"),
		element: <EmployeeDeletePage />,
		authOnly: true,
		roles: [UserRole.ADMIN],
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
	[AppRoutes.DOCUMENT_EDIT]: {
		path: getRouteDocumentEdit(":id"),
		element: <DocumentEditPage />,
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
	[AppRoutes.PAYROLL_CEREATE]: {
		path: getRoutePayrollCreate(),
		element: <PayrollCreatePage />,
		authOnly: true,
		roles: [UserRole.ACCOUNTANT],
	},
	[AppRoutes.PAYROLL_EDIT]: {
		path: getRoutePayrollEdit(":id"),
		element: <PayrollEditPage />,
		authOnly: true,
		roles: [UserRole.ACCOUNTANT],
	},
	[AppRoutes.PAYROLL_DELETE]: {
		path: getRoutePayrollDelete(":id"),
		element: <PayrollDeletePage />,
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
