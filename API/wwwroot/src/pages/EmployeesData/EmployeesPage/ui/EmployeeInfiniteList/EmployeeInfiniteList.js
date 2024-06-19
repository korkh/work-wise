import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TextHolder } from "@/shared/ui/TextHolder";
import { EmployeeList } from "@/entities/Employee";
import { getEmployeesPageError, getEmployeesPageIsLoading, } from "../../model/selectors/getEmployeesPageSelectors";
import { selectAllEmployees } from "../../model/slices/employeesPageSlice";
import { TableLoader } from "@/shared/ui/Table/ui/TableLoader";
export const EmployeeInfiniteList = memo(function EmployeeInfiniteList(props) {
    const { className } = props;
    const { t } = useTranslation();
    const employees = useSelector(selectAllEmployees);
    const isLoading = useSelector(getEmployeesPageIsLoading);
    console.log("LOADER", isLoading);
    const error = useSelector(getEmployeesPageError);
    const [employeesLoaded, setEmployeesLoaded] = useState(false);
    useEffect(() => {
        if (employees) {
            setEmployeesLoaded(true);
        }
    }, [employees]);
    if (error || !employeesLoaded) {
        return _jsx(TextHolder, { text: t("Employees loading error") });
    }
    return isLoading ? (_jsx(TableLoader, {})) : (_jsx(EmployeeList, { "data-testid": "EmployeeList", employees: employees, isLoading: isLoading, className: className }));
});
