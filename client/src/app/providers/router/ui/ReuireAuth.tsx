import { Navigate, useLocation } from "react-router-dom";
import { useMemo } from "react";
import { UserRole, getUserAuthData } from "@/entities/User";
import { getRouteForbidden, getRouteMain } from "@/shared/consts/routerConsts";
import { useAuthToken } from "@/shared/lib/hooks/useAuthToken/useAuthToken";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

interface RequireAuthProps {
	children: JSX.Element;
	roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
	const token = useAuthToken();
	const auth = useSelector(getUserAuthData);
	const location = useLocation();

	const hasRequiredRoles = useMemo(() => {
		if (!roles) {
			return true;
		}
		if (!token) {
			return (
				<Navigate to={getRouteMain()} state={{ from: location }} replace />
			);
		}

		return roles.some((requiredRole) => {
			const hasRole = token.role.includes(requiredRole);
			return hasRole;
		});
	}, [roles, token, location]);

	if (!auth) {
		return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
	}

	if (!hasRequiredRoles && auth) {
		toast.error("Not authorised to access this area");
		return (
			<Navigate to={getRouteForbidden()} state={{ from: location }} replace />
		);
	}

	return children;
}
