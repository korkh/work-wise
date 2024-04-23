import {
	AppRoutes,
	getRouteAbout,
	getRouteAccountant,
	getRouteAdmin,
	getRouteDocumentCreate,
	getRouteDocumentDetails,
	getRouteDocumentEdit,
	getRouteDocuments,
	getRouteEmployeeCreate,
	getRouteEmployeeDetails,
	getRouteEmployeeEdit,
	getRouteEmployees,
	getRouteForbidden,
	getRouteMain,
	getRouteManager,
	getRouteNotFound,
	getRoutePayrollCreate,
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
	// [AppRoutes.EMPLOYEE_CREATE]: {
	// 	path: getRouteEmployeeCreate(),
	// 	element: <EmployeeCreatePage />,
	// },
	// [AppRoutes.EMPLOYEE_EDIT]: {
	// 	path: getRouteEmployeeEdit(":id"),
	// 	element: <EmployeeEditPage />,
	// },
	[AppRoutes.DOCUMENTS]: {
		path: getRouteDocuments(),
		element: <DocumentsPage />,
	},
	[AppRoutes.DOCUMENT_DETAILS]: {
		path: getRouteDocumentDetails(":id"),
		element: <DocumentDetailsPage />,
	},
	// [AppRoutes.DOCUMENT_CREATE]: {
	// 	path: getRouteDocumentCreate(),
	// 	element: <DocumentCreatePage />,
	// },
	// [AppRoutes.DOCUMENT_EDIT]: {
	// 	path: getRouteDocumentEdit(":id"),
	// 	element: <DocumentEditPage />,
	// },
	[AppRoutes.PAYROLLS]: {
		path: getRoutePayrolls(),
		element: <PayrollsPage />,
	},
	[AppRoutes.PAYROLL_DETAILS]: {
		path: getRoutePayrollDetails(":id"),
		element: <PayrollDetailsPage />,
	},
	// [AppRoutes.PAYROLL_CEREATE]: {
	// 	path: getRoutePayrollCreate(),
	// 	element: <PayrollCreatePage />,
	// },
	// [AppRoutes.PAYROLL_EDIT]: {
	// 	path: getRoutePayrollEdit(":id"),
	// 	element: <PayrollEditPage />,
	// },
	[AppRoutes.ADMIN_PANEL]: {
		path: getRouteAdmin(),
		element: <AdminPanelPage />,
	},
	// [AppRoutes.MANAGER_PANEL]: {
	// 	path: getRouteManager(),
	// 	element: <ManagerPanelPage />,
	// },
	// [AppRoutes.ACCOUNTANT_PANEL]: {
	// 	path: getRouteAccountant(),
	// 	element: <AccountantPanelPage />,
	// },
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
