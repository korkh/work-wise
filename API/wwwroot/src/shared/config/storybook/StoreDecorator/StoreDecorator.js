import { jsx as _jsx } from "react/jsx-runtime";
import { StoreProvider } from "@/app/providers/StoreProvider";
import { employeeDetailsReducer } from "@/entities/Employee/testing";
import { signInReducer } from "@/features/LoginAuth/testing";
import { documentsPageReducer } from "@/pages/DocumentsData/testing";
import { employeeTimeCardReducer } from "@/pages/EmployeeTimeCardPage/testing";
import { employeesPageReducer } from "@/pages/EmployeesData/testing";
import { payrollsPageReducer } from "@/pages/PayrollsData/testing";
const defaultAsyncReducers = {
    signInForm: signInReducer,
    employeePage: employeesPageReducer,
    documentPage: documentsPageReducer,
    payrollPage: payrollsPageReducer,
    employeeDetails: employeeDetailsReducer,
    employeeTimeCard: employeeTimeCardReducer,
};
const StoreDecorator = ({ state, children, asyncReducers, }) => (_jsx(StoreProvider, { initialState: state, asyncReducers: { ...defaultAsyncReducers, ...asyncReducers }, children: children }));
export default StoreDecorator;
