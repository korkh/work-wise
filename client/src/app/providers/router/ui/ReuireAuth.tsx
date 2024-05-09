import { Navigate, useLocation } from "react-router-dom";
import { useMemo } from "react";
import { UserRole } from "@/entities/User";
import { getRouteForbidden, getRouteMain } from "@/shared/consts/routerConsts";
import { useAuthToken } from "@/shared/lib/hooks/useAuthToken/useAuthToken";

interface RequireAuthProps {
	children: JSX.Element;
	roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
	const auth = useAuthToken();
	const location = useLocation();

	const hasRequiredRoles = useMemo(() => {
		if (!roles) {
			return true;
		}
		if (!auth) {
			return (
				<Navigate to={getRouteMain()} state={{ from: location }} replace />
			);
		}

		return roles.some((requiredRole) => {
			const hasRole = auth.role.includes(requiredRole);
			return hasRole;
		});
	}, [auth, location, roles]);

	if (!hasRequiredRoles && auth) {
		return (
			<Navigate to={getRouteForbidden()} state={{ from: location }} replace />
		);
	}

	return children;
}
