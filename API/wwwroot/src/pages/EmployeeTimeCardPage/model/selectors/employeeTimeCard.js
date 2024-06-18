export const getEmployeeTimeCardData = (state) => state.employeeTimeCard?.data;
export const getEmployeeTimeCardForm = (state) => state.employeeTimeCard?.form;
export const getEmployeeTiemCardSelectedMonth = (state) => state.employeeTimeCard?.selectedMonth;
export const getEmployeeTiemCardError = (state) => state.employeeTimeCard?.error;
export const getEmployeeTiemCardIsLoading = (state) => state.employeeTimeCard?.isLoading || false;
