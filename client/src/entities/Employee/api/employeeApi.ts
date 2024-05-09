import { rtkApi } from "@/shared/api/rtkApi";
import { Employee } from "../model/types/Employee";

export const employeeApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getEmployeeById: build.query<
			Employee,
			{ token: string; employeeId: string }
		>({
			query: ({ token, employeeId }) => ({
				url: `/employees/${employeeId}`,
				method: "GET",
				credentials: "include",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}),
		}),
	}),
});

export const getEmployeeByIdQuery =
	employeeApi.endpoints.getEmployeeById.initiate;
