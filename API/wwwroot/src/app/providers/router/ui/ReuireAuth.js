import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate, useLocation } from "react-router-dom";
import { useMemo } from "react";
import { getUserAuthData } from "@/entities/User";
import { getRouteForbidden, getRouteMain } from "@/shared/consts/routerConsts";
import { useAuthToken } from "@/shared/lib/hooks/useAuthToken/useAuthToken";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
export function RequireAuth({ children, roles }) {
    const token = useAuthToken();
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }
        if (!token) {
            return (_jsx(Navigate, { to: getRouteMain(), state: { from: location }, replace: true }));
        }
        return roles.some((requiredRole) => {
            const hasRole = token.role.includes(requiredRole);
            return hasRole;
        });
    }, [roles, token, location]);
    if (!auth) {
        return _jsx(Navigate, { to: getRouteMain(), state: { from: location }, replace: true });
    }
    if (!hasRequiredRoles && auth) {
        toast.error("Not authorised to access this area");
        return (_jsx(Navigate, { to: getRouteForbidden(), state: { from: location }, replace: true }));
    }
    return children;
}
