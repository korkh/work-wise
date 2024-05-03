import { Employee, EmployeeParams } from "@/entities/Employee";
import { rtkApi } from "@/shared/api/rtkApi";

export const employeePageApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		fetchEmployees: build.query<Employee[], EmployeeParams>({
			query: (params) => ({
				url: "/employees",
				method: "GET",
				params: {
					_sort: params.sort,
					_order: params.order,
					_limit: params.pageSize,
					_page: params.pageNumber,
					q: params.search,
				},
				headers: {
					Authorization: `Bearer ${params.token}`,
				},
			}),
		}),
	}),
});

export const getFetchEmployeesQuery =
	employeePageApi.endpoints.fetchEmployees.initiate;
