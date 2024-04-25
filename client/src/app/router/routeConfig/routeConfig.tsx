import { AboutPage } from "@/pages/AboutPage";
import { AccountantPanelPage } from "@/pages/AccountantPanelPage";
import { AdminPanelPage } from "@/pages/AdminPanelPage";
import { DocumentCreatePage } from "@/pages/DocumentCreatePage";
import { DocumentDeletePage } from "@/pages/DocumentDeletePage";
import { DocumentDetailsPage } from "@/pages/DocumentDetailsPage";
import { DocumentEditPage } from "@/pages/DocumentEditPage";
import { DocumentsPage } from "@/pages/DocumentsPage";
import { EmployeeCreatePage } from "@/pages/EmployeeCreatePage";
import { EmployeeDeletePage } from "@/pages/EmployeeDeletePage";
import { EmployeeDetailsPage } from "@/pages/EmployeeDetailsPage";
import { EmployeeEditPage } from "@/pages/EmployeeEditPage";
import { EmployeesPage } from "@/pages/EmployeesPage";
import { ForbiddenPage } from "@/pages/ForbiddenPage";
import { MainPage } from "@/pages/MainPage";
import { ManagerPanelPage } from "@/pages/ManagerPanelPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { PayrollCreatePage } from "@/pages/PayrollCreatePage";
import { PayrollDeletePage } from "@/pages/PayrollDeletePage";
import { PayrollDetailsPage } from "@/pages/PayrollDetailsPage";
import { PayrollEditPage } from "@/pages/PayrollEditPage";
import { PayrollsPage } from "@/pages/PayrollsPage";
import { ProfilePage } from "@/pages/ProfilePage";
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
	},
	[AppRoutes.EMPLOYEE_DETAILS]: {
		path: getRouteEmployeeDetails(":id"),
		element: <EmployeeDetailsPage />,
	},
	[AppRoutes.EMPLOYEE_CREATE]: {
		path: getRouteEmployeeCreate(),
		element: <EmployeeCreatePage />,
	},
	[AppRoutes.EMPLOYEE_EDIT]: {
		path: getRouteEmployeeEdit(":id"),
		element: <EmployeeEditPage />,
	},
	[AppRoutes.EMPLOYEE_DELETE]: {
		path: getRouteEmployeeDelete(":id"),
		element: <EmployeeDeletePage />,
	},
	[AppRoutes.DOCUMENTS]: {
		path: getRouteDocuments(),
		element: <DocumentsPage />,
	},
	[AppRoutes.DOCUMENT_DETAILS]: {
		path: getRouteDocumentDetails(":id"),
		element: <DocumentDetailsPage />,
	},
	[AppRoutes.DOCUMENT_CREATE]: {
		path: getRouteDocumentCreate(),
		element: <DocumentCreatePage />,
	},
	[AppRoutes.DOCUMENT_EDIT]: {
		path: getRouteDocumentEdit(":id"),
		element: <DocumentEditPage />,
	},
	[AppRoutes.DOCUMENT_DELETE]: {
		path: getRouteDocumentDelete(":id"),
		element: <DocumentDeletePage />,
	},
	[AppRoutes.PAYROLLS]: {
		path: getRoutePayrolls(),
		element: <PayrollsPage />,
	},
	[AppRoutes.PAYROLL_DETAILS]: {
		path: getRoutePayrollDetails(":id"),
		element: <PayrollDetailsPage />,
	},
	[AppRoutes.PAYROLL_CEREATE]: {
		path: getRoutePayrollCreate(),
		element: <PayrollCreatePage />,
	},
	[AppRoutes.PAYROLL_EDIT]: {
		path: getRoutePayrollEdit(":id"),
		element: <PayrollEditPage />,
	},
	[AppRoutes.PAYROLL_DELETE]: {
		path: getRoutePayrollDelete(":id"),
		element: <PayrollDeletePage />,
	},
	[AppRoutes.ADMIN_PANEL]: {
		path: getRouteAdmin(),
		element: <AdminPanelPage />,
	},
	[AppRoutes.MANAGER_PANEL]: {
		path: getRouteManager(),
		element: <ManagerPanelPage />,
	},
	[AppRoutes.ACCOUNTANT_PANEL]: {
		path: getRouteAccountant(),
		element: <AccountantPanelPage />,
	},
	[AppRoutes.SETTINGS]: {
		path: getRouteSettings(),
		element: <SettingsPage />,
	},
	[AppRoutes.FORBIDDEN]: {
		path: getRouteForbidden(),
		element: <ForbiddenPage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: getRouteNotFound(),
		element: <NotFoundPage />,
	},
};
