export enum AppRoutes {
	MAIN = "main",
	ABOUT = "about",
	PROFILE = "profile",
	EMPLOYEES = "employees",
	EMPLOYEE_DETAILS = "employee_details",
	EMPLOYEE_CREATE = "employee_create",
	EMPLOYEE_EDIT = "employee_edit",
	EMPLOYEE_DELETE = "employee_delete",
	DOCUMENTS = "documents",
	DOCUMENT_DETAILS = "document_details",
	DOCUMENT_CREATE = "document_create",
	DOCUMENT_EDIT = "document_edit",
	DOCUMENT_DELETE = "document_delete",
	PAYROLLS = "payrolls",
	PAYROLL_DETAILS = "payroll_details",
	PAYROLL_CEREATE = "payroll_create",
	PAYROLL_EDIT = "payroll_edit",
	PAYROLL_DELETE = "payroll_delete",
	ADMIN_PANEL = "admin_panel",
	MANAGER_PANEL = "manager_panel",
	ACCOUNTANT_PANEL = "accountant_panel",
	SETTINGS = "settings",
	FORBIDDEN = "forbidden",
	NOT_FOUND = "not_found",
}

export const getRouteMain = () => "/";
export const getRouteAbout = () => "/about";
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteEmployees = () => "/employees";
export const getRouteEmployeeDetails = (id: string) => `/employees/${id}`;
export const getRouteEmployeeCreate = () => "/employees/new";
export const getRouteEmployeeEdit = (id: string) => `/employees/${id}/edit`;
export const getRouteEmployeeDelete = (id: string) => `/employees/${id}`;
export const getRouteDocuments = () => "/documents";
export const getRouteDocumentDetails = (id: string) => `/documents/${id}`;
export const getRouteDocumentCreate = () => "/documents/new";
export const getRouteDocumentEdit = (id: string) => `/documents/${id}/edit`;
export const getRouteDocumentDelete = (id: string) => `/documents/${id}`;
export const getRoutePayrolls = () => "/payrolls";
export const getRoutePayrollDetails = (id: string) => `/papyrolls/${id}`;
export const getRoutePayrollCreate = () => "/papyrolls/new";
export const getRoutePayrollEdit = (id: string) => `/papyrolls/${id}/edit`;
export const getRoutePayrollDelete = (id: string) => `/papyrolls/${id}`;
export const getRouteAdmin = () => "/admin";
export const getRouteManager = () => "/manager";
export const getRouteAccountant = () => "/accountant";
export const getRouteSettings = () => "/settings";
export const getRouteForbidden = () => "/forbidden";
export const getRouteNotFound = () => "/not_found";

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
	[getRouteMain()]: AppRoutes.MAIN,
	[getRouteAbout()]: AppRoutes.ABOUT,
	[getRouteProfile(":id")]: AppRoutes.PROFILE,
	[getRouteEmployees()]: AppRoutes.EMPLOYEES,
	[getRouteEmployeeDetails(":id")]: AppRoutes.EMPLOYEE_DETAILS,
	[getRouteEmployeeCreate()]: AppRoutes.DOCUMENT_CREATE,
	[getRouteEmployeeEdit(":id")]: AppRoutes.DOCUMENT_EDIT,
	[getRouteEmployeeDelete(":id")]: AppRoutes.DOCUMENT_DELETE,
	[getRouteDocuments()]: AppRoutes.DOCUMENTS,
	[getRouteDocumentDetails(":id")]: AppRoutes.DOCUMENT_DETAILS,
	[getRouteDocumentCreate()]: AppRoutes.DOCUMENT_CREATE,
	[getRouteDocumentEdit(":id")]: AppRoutes.DOCUMENT_EDIT,
	[getRouteDocumentDelete(":id")]: AppRoutes.DOCUMENT_DELETE,
	[getRoutePayrolls()]: AppRoutes.PAYROLLS,
	[getRoutePayrollDetails(":id")]: AppRoutes.PAYROLL_DETAILS,
	[getRoutePayrollCreate()]: AppRoutes.PAYROLL_CEREATE,
	[getRoutePayrollEdit(":id")]: AppRoutes.PAYROLL_EDIT,
	[getRoutePayrollDelete(":id")]: AppRoutes.PAYROLL_DELETE,
	[getRouteAdmin()]: AppRoutes.ADMIN_PANEL,
	[getRouteManager()]: AppRoutes.MANAGER_PANEL,
	[getRouteAccountant()]: AppRoutes.ACCOUNTANT_PANEL,
	[getRouteSettings()]: AppRoutes.SETTINGS,
	[getRouteForbidden()]: AppRoutes.FORBIDDEN,
	[getRouteNotFound()]: AppRoutes.NOT_FOUND,
};
