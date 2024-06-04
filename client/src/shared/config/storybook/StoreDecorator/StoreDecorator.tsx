import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { employeeDetailsReducer } from "@/entities/Employee/testing";
import { signInReducer } from "@/features/LoginAuth/testing";
import { documentsPageReducer } from "@/pages/DocumentsData/testing";
import { employeeTimeCardReducer } from "@/pages/EmployeeTimeCardPage/testing";
import { employeesPageReducer } from "@/pages/EmployeesData/testing";
import { payrollsPageReducer } from "@/pages/PayrollsData/testing";
import { ReducersList } from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { ReactNode } from "react";

interface StoreDecoratorProps {
	state: DeepPartial<StateSchema>;
	children: ReactNode;
	asyncReducers?: ReducersList;
}

const defaultAsyncReducers: ReducersList = {
	signInForm: signInReducer,
	employeePage: employeesPageReducer,
	documentPage: documentsPageReducer,
	payrollPage: payrollsPageReducer,
	employeeDetails: employeeDetailsReducer,
	employeeTimeCard: employeeTimeCardReducer,
};

const StoreDecorator: React.FC<StoreDecoratorProps> = ({
	state,
	children,
	asyncReducers,
}) => (
	<StoreProvider
		initialState={state}
		asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
	>
		{children}
	</StoreProvider>
);

export default StoreDecorator;
