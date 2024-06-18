import { jsx as _jsx } from "react/jsx-runtime";
import { UserRole } from "@/entities/User";
import { AboutPage } from "@/pages/AboutPage";
import { AccountantPanelPage } from "@/pages/AccountantPanelPage";
import { AdminPanelPage } from "@/pages/AdminPanelPage";
import { BusinessTripDetails, BusinessTripsPage, BusinessTripsSummariesPage, } from "@/pages/BusinessTripsData";
import { DocumentsPage, DocumentCreatePage, DocumentDeletePage, DocumentDetailsPage, } from "@/pages/DocumentsData";
import { EmployeeTimeTablePage } from "@/pages/EmployeeTimeCardPage";
import { EmployeesPage, EmployeeDetailsPage, EmployeeCreatePage, EmployeeDeletePage, } from "@/pages/EmployeesData";
import { ErrorPage } from "@/pages/ErrorPage";
import { ForbiddenPage } from "@/pages/ForbiddenPage";
import { MainPage } from "@/pages/MainPage";
import { ManagerPanelPage } from "@/pages/ManagerPanelPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { PayrollsPage, PayrollDetailsPage } from "@/pages/PayrollsData";
import { ProfilePage } from "@/pages/Profiles";
import { SettingsPage } from "@/pages/SettingsPage";
import { AppRoutes, getRouteAbout, getRouteAccountant, getRouteAdmin, getRouteBusinessTripDetails, getRouteBusinessTrips, getRouteBusinessTripsSummaries, getRouteDocumentCreate, getRouteDocumentDelete, getRouteDocumentDetails, getRouteDocuments, getRouteEmployeeCreate, getRouteEmployeeDelete, getRouteEmployeeDetails, getRouteEmployeeTimeCard, getRouteEmployees, getRouteError, getRouteForbidden, getRouteMain, getRouteManager, getRouteNotFound, getRoutePayrollDetails, getRoutePayrolls, getRouteProfile, getRouteSettings, } from "@/shared/consts/routerConsts";
export const routeConfig = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: _jsx(MainPage, {}),
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: _jsx(AboutPage, {}),
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(":id"),
        element: _jsx(ProfilePage, {}),
    },
    [AppRoutes.EMPLOYEES]: {
        path: getRouteEmployees(),
        element: _jsx(EmployeesPage, {}),
        authOnly: true,
    },
    [AppRoutes.EMPLOYEE_DETAILS]: {
        path: getRouteEmployeeDetails(":id"),
        element: _jsx(EmployeeDetailsPage, {}),
        authOnly: true,
    },
    [AppRoutes.EMPLOYEE_CREATE]: {
        path: getRouteEmployeeCreate(),
        element: _jsx(EmployeeCreatePage, {}),
        authOnly: true,
        roles: [UserRole.ADMIN],
    },
    [AppRoutes.EMPLOYEE_DELETE]: {
        path: getRouteEmployeeDelete(":id"),
        element: _jsx(EmployeeDeletePage, {}),
        authOnly: true,
        roles: [UserRole.ADMIN],
    },
    [AppRoutes.EMPLOYEE_TIME_CARD]: {
        path: getRouteEmployeeTimeCard(),
        element: _jsx(EmployeeTimeTablePage, {}),
        authOnly: true,
        roles: [UserRole.ACCOUNTANT],
    },
    [AppRoutes.DOCUMENTS]: {
        path: getRouteDocuments(),
        element: _jsx(DocumentsPage, {}),
        authOnly: true,
        roles: [UserRole.ADMIN],
    },
    [AppRoutes.DOCUMENT_DETAILS]: {
        path: getRouteDocumentDetails(":id"),
        element: _jsx(DocumentDetailsPage, {}),
        authOnly: true,
        roles: [UserRole.ADMIN],
    },
    [AppRoutes.DOCUMENT_CREATE]: {
        path: getRouteDocumentCreate(),
        element: _jsx(DocumentCreatePage, {}),
        authOnly: true,
        roles: [UserRole.ADMIN],
    },
    [AppRoutes.DOCUMENT_DELETE]: {
        path: getRouteDocumentDelete(":id"),
        element: _jsx(DocumentDeletePage, {}),
        authOnly: true,
        roles: [UserRole.ADMIN],
    },
    [AppRoutes.PAYROLLS]: {
        path: getRoutePayrolls(),
        element: _jsx(PayrollsPage, {}),
        authOnly: true,
        roles: [UserRole.ACCOUNTANT],
    },
    [AppRoutes.PAYROLL_DETAILS]: {
        path: getRoutePayrollDetails(":id"),
        element: _jsx(PayrollDetailsPage, {}),
        authOnly: true,
        roles: [UserRole.ACCOUNTANT],
    },
    [AppRoutes.BUSINESS_TRIPS]: {
        path: getRouteBusinessTrips(),
        element: _jsx(BusinessTripsPage, {}),
        authOnly: true,
        roles: [UserRole.ACCOUNTANT],
    },
    [AppRoutes.BUSINESS_TRIPS_SUMMARIES]: {
        path: getRouteBusinessTripsSummaries(),
        element: _jsx(BusinessTripsSummariesPage, {}),
        authOnly: true,
        roles: [UserRole.ACCOUNTANT],
    },
    [AppRoutes.BUSINESS_TRIP_DETAILS]: {
        path: getRouteBusinessTripDetails(":id"),
        element: _jsx(BusinessTripDetails, {}),
        authOnly: true,
        roles: [UserRole.ACCOUNTANT],
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: getRouteAdmin(),
        element: _jsx(AdminPanelPage, {}),
        authOnly: true,
        roles: [UserRole.ADMIN],
    },
    [AppRoutes.MANAGER_PANEL]: {
        path: getRouteManager(),
        element: _jsx(ManagerPanelPage, {}),
        authOnly: true,
        roles: [UserRole.MANAGER],
    },
    [AppRoutes.ACCOUNTANT_PANEL]: {
        path: getRouteAccountant(),
        element: _jsx(AccountantPanelPage, {}),
        authOnly: true,
        roles: [UserRole.ACCOUNTANT],
    },
    [AppRoutes.SETTINGS]: {
        path: getRouteSettings(),
        element: _jsx(SettingsPage, {}),
        authOnly: true,
    },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: _jsx(ForbiddenPage, {}),
    },
    [AppRoutes.ERROR]: {
        path: getRouteError(),
        element: _jsx(ErrorPage, {}),
    },
    [AppRoutes.NOT_FOUND]: {
        path: getRouteNotFound(),
        element: _jsx(NotFoundPage, {}),
    },
};
