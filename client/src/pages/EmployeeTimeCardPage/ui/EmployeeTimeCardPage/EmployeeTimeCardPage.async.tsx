import { lazy } from "react";

export const EmployeeTimeCardPageAsync = lazy(
	() => import("./EmployeeTimeCardPage")
);
