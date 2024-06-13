export enum AppRoutes {
	MAIN = "main",
	ABOUT = "about",
	PROFILE = "profile",
	EMPLOYEES = "employees",
	EMPLOYEE_DETAILS = "employee_details",
	EMPLOYEE_CREATE = "employee_create",
	EMPLOYEE_DELETE = "employee_delete",
	EMPLOYEE_TIME_CARD = "employee_time_card",
	DOCUMENTS = "documents",
	DOCUMENT_DETAILS = "document_details",
	DOCUMENT_CREATE = "document_create",
	DOCUMENT_DELETE = "document_delete",
	PAYROLLS = "payrolls",
	PAYROLL_DETAILS = "payroll_details",
	BUSINESS_TRIPS = "busineess_trips",
	BUSINESS_TRIP_DETAILS = "busineess_trip_details",
	ADMIN_PANEL = "admin_panel",
	MANAGER_PANEL = "manager_panel",
	ACCOUNTANT_PANEL = "accountant_panel",
	SETTINGS = "settings",
	FORBIDDEN = "forbidden",
	ERROR = "error",
	NOT_FOUND = "not_found",
}

export const getRouteMain = () => "/";
export const getRouteAbout = () => "/about";
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteEmployees = () => "/employees";
export const getRouteEmployeeDetails = (id: string) => `/employees/${id}`;
export const getRouteEmployeeCreate = () => "/employees/new";
export const getRouteEmployeeDelete = (id: string) => `/employees/${id}`;
export const getRouteEmployeeTimeCard = () => `/timecards`;
export const getRouteDocuments = () => "/documents";
export const getRouteDocumentDetails = (id: string) => `/documents/${id}`;
export const getRouteDocumentCreate = () => "/documents/new";
export const getRouteDocumentDelete = (id: string) => `/documents/${id}`;
export const getRoutePayrolls = () => "/payrolls";
export const getRoutePayrollDetails = (id: string) => `/papyrolls/${id}`;
export const getRouteBusinessTrips = () => `/businesstrips`;
export const getRouteBusinessTripDetails = (id: string) =>
	`/businesstrip/${id}`;
export const getRouteAdmin = () => "/admin";
export const getRouteManager = () => "/manager";
export const getRouteAccountant = () => "/accountant";
export const getRouteSettings = () => "/settings";
export const getRouteForbidden = () => "/forbidden";
export const getRouteError = () => "/error";
export const getRouteNotFound = () => "*";

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
	[getRouteMain()]: AppRoutes.MAIN,
	[getRouteAbout()]: AppRoutes.ABOUT,
	[getRouteProfile(":id")]: AppRoutes.PROFILE,
	[getRouteEmployees()]: AppRoutes.EMPLOYEES,
	[getRouteEmployeeDetails(":id")]: AppRoutes.EMPLOYEE_DETAILS,
	[getRouteEmployeeTimeCard()]: AppRoutes.EMPLOYEE_TIME_CARD,
	[getRouteEmployeeCreate()]: AppRoutes.DOCUMENT_CREATE,
	[getRouteEmployeeDelete(":id")]: AppRoutes.DOCUMENT_DELETE,
	[getRouteDocuments()]: AppRoutes.DOCUMENTS,
	[getRouteDocumentDetails(":id")]: AppRoutes.DOCUMENT_DETAILS,
	[getRouteDocumentCreate()]: AppRoutes.DOCUMENT_CREATE,
	[getRouteDocumentDelete(":id")]: AppRoutes.DOCUMENT_DELETE,
	[getRoutePayrolls()]: AppRoutes.PAYROLLS,
	[getRoutePayrollDetails(":id")]: AppRoutes.PAYROLL_DETAILS,
	[getRouteBusinessTrips()]: AppRoutes.BUSINESS_TRIPS,
	[getRouteBusinessTripDetails(":id")]: AppRoutes.BUSINESS_TRIP_DETAILS,
	[getRouteAdmin()]: AppRoutes.ADMIN_PANEL,
	[getRouteManager()]: AppRoutes.MANAGER_PANEL,
	[getRouteAccountant()]: AppRoutes.ACCOUNTANT_PANEL,
	[getRouteSettings()]: AppRoutes.SETTINGS,
	[getRouteForbidden()]: AppRoutes.FORBIDDEN,
	[getRouteError()]: AppRoutes.ERROR,
	[getRouteNotFound()]: AppRoutes.NOT_FOUND,
};
