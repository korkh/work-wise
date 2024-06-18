import { jsx as _jsx } from "react/jsx-runtime";
import { AppRoutes } from "@/shared/consts/routerConsts";
import { useRouteChange } from "@/shared/lib/hooks/router/useRouteChange";
import { SideToolbarScroll } from "@/widgets/SideToolbarScroll";
export const useToolBarByAppRoute = () => {
    const appRoute = useRouteChange();
    const toolbarsByAppRoute = {
        [AppRoutes.EMPLOYEES]: _jsx(SideToolbarScroll, {}),
        [AppRoutes.EMPLOYEE_DETAILS]: _jsx(SideToolbarScroll, {}),
        [AppRoutes.PAYROLLS]: _jsx(SideToolbarScroll, {}),
        [AppRoutes.PAYROLL_DETAILS]: _jsx(SideToolbarScroll, {}),
    };
    return toolbarsByAppRoute[appRoute];
};
