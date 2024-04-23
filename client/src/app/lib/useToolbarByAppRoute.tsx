import { AppRoutes } from "@/shared/consts/routerConsts";
import { SideToolbarScroll } from "@/widgets/SideToolbarScroll";
import { ReactElement } from "react";

export const useToolBarByAppRoute = () => {
	const appRoute = useRouteChange();

	const toolbarsByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
		[AppRoutes.EMPLOYEES]: <SideToolbarScroll />,
		[AppRoutes.EMPLOYEE_DETAILS]: <SideToolbarScroll />,
	};

	return toolbarsByAppRoute[appRoute];
};
