export const getEmployeeDetailsData = (state) => state.employeeDetails?.data;
export const getEmployeeDetailsIsLoading = (state) => state.employeeDetails?.isLoading || false;
export const getEmployeeDetailsError = (state) => state.employeeDetails?.error;
export const getEmployeeValidateErrors = (state) => state.employeeDetails?.validateErrors;
export const getEmployeeForm = (state) => state.employeeDetails?.form;
export const getEmployeeReadonly = (state) => state.employeeDetails?.readonly;
