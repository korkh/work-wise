export var AppRoutes;
(function (AppRoutes) {
    AppRoutes["MAIN"] = "main";
    AppRoutes["ABOUT"] = "about";
    AppRoutes["PROFILE"] = "profile";
    AppRoutes["EMPLOYEES"] = "employees";
    AppRoutes["EMPLOYEE_DETAILS"] = "employee_details";
    AppRoutes["EMPLOYEE_CREATE"] = "employee_create";
    AppRoutes["EMPLOYEE_TIME_CARD"] = "employee_time_card";
    AppRoutes["DOCUMENTS"] = "documents";
    AppRoutes["DOCUMENT_DETAILS"] = "document_details";
    AppRoutes["DOCUMENT_CREATE"] = "document_create";
    AppRoutes["DOCUMENT_DELETE"] = "document_delete";
    AppRoutes["PAYROLLS"] = "payrolls";
    AppRoutes["PAYROLL_DETAILS"] = "payroll_details";
    AppRoutes["BUSINESS_TRIPS"] = "busineess_trips";
    AppRoutes["BUSINESS_TRIPS_SUMMARIES"] = "business_trips_summaries";
    AppRoutes["BUSINESS_TRIP_DETAILS"] = "busineess_trip_details";
    AppRoutes["ADMIN_PANEL"] = "admin_panel";
    AppRoutes["MANAGER_PANEL"] = "manager_panel";
    AppRoutes["ACCOUNTANT_PANEL"] = "accountant_panel";
    AppRoutes["SETTINGS"] = "settings";
    AppRoutes["FORBIDDEN"] = "forbidden";
    AppRoutes["ERROR"] = "error";
    AppRoutes["NOT_FOUND"] = "not_found";
})(AppRoutes || (AppRoutes = {}));
export const getRouteMain = () => "/";
export const getRouteAbout = () => "/about";
export const getRouteProfile = (id) => `/profile/${id}`;
export const getRouteEmployees = () => "/employees";
export const getRouteEmployeeDetails = (id) => `/employees/${id}`;
export const getRouteEmployeeCreate = () => "/employees/new";
export const getRouteEmployeeTimeCard = () => `/timecards`;
export const getRouteDocuments = () => "/documents";
export const getRouteDocumentDetails = (id) => `/documents/${id}`;
export const getRouteDocumentCreate = () => "/documents/new";
export const getRouteDocumentDelete = (id) => `/documents/${id}`;
export const getRoutePayrolls = () => "/payrolls";
export const getRoutePayrollDetails = (id) => `/papyrolls/${id}`;
export const getRouteBusinessTrips = () => `/businesstrips`;
export const getRouteBusinessTripsSummaries = () => `/businesstrips/summaries`;
export const getRouteBusinessTripDetails = (id) => `/businesstrip/${id}`;
export const getRouteAdmin = () => "/admin";
export const getRouteManager = () => "/manager";
export const getRouteAccountant = () => "/accountant";
export const getRouteSettings = () => "/settings";
export const getRouteForbidden = () => "/forbidden";
export const getRouteError = () => "/error";
export const getRouteNotFound = () => "*";
export const AppRouteByPathPattern = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteAbout()]: AppRoutes.ABOUT,
    [getRouteProfile(":id")]: AppRoutes.PROFILE,
    [getRouteEmployees()]: AppRoutes.EMPLOYEES,
    [getRouteEmployeeDetails(":id")]: AppRoutes.EMPLOYEE_DETAILS,
    [getRouteEmployeeTimeCard()]: AppRoutes.EMPLOYEE_TIME_CARD,
    [getRouteEmployeeCreate()]: AppRoutes.DOCUMENT_CREATE,
    [getRouteDocuments()]: AppRoutes.DOCUMENTS,
    [getRouteDocumentDetails(":id")]: AppRoutes.DOCUMENT_DETAILS,
    [getRouteDocumentCreate()]: AppRoutes.DOCUMENT_CREATE,
    [getRouteDocumentDelete(":id")]: AppRoutes.DOCUMENT_DELETE,
    [getRoutePayrolls()]: AppRoutes.PAYROLLS,
    [getRoutePayrollDetails(":id")]: AppRoutes.PAYROLL_DETAILS,
    [getRouteBusinessTrips()]: AppRoutes.BUSINESS_TRIPS,
    [getRouteBusinessTripsSummaries()]: AppRoutes.BUSINESS_TRIPS_SUMMARIES,
    [getRouteBusinessTripDetails(":id")]: AppRoutes.BUSINESS_TRIP_DETAILS,
    [getRouteAdmin()]: AppRoutes.ADMIN_PANEL,
    [getRouteManager()]: AppRoutes.MANAGER_PANEL,
    [getRouteAccountant()]: AppRoutes.ACCOUNTANT_PANEL,
    [getRouteSettings()]: AppRoutes.SETTINGS,
    [getRouteForbidden()]: AppRoutes.FORBIDDEN,
    [getRouteError()]: AppRoutes.ERROR,
    [getRouteNotFound()]: AppRoutes.NOT_FOUND,
};
