import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./EmployeeDetails.module.scss";
import { memo } from "react";
import { DynamicReducerLoader, } from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getEmployeeDetailsError } from "../../model/selectors/employeeDetails";
import { fetchEmployeeByID } from "../../model/services/fetchEmployeeById/fetchEmployeeById";
import { employeeDetailsReducer } from "../../model/slices/employeeDetailsSlice";
import { ColumnStack } from "@/shared/ui/Stack";
import { EmployeeDetailsCard } from "../EmployeeDetailsCard";
import { EmployeeDetailsError } from "../EmployeeDetailsError/EmployeeDetailsError";
import { useInitEffect } from "@/shared/lib/hooks/useInitEffect/useInitEffect";
const reducers = {
    employeeDetails: employeeDetailsReducer,
};
export const EmployeeDetails = memo(function EmployeeDetails(props) {
    const { className, employeeId } = props;
    const dispatch = useAppDispatch();
    const error = useSelector(getEmployeeDetailsError);
    useInitEffect(() => {
        if (__PROJECT__ !== "storybook") {
            dispatch(fetchEmployeeByID(employeeId));
        }
    });
    let content;
    if (error) {
        content = _jsx(EmployeeDetailsError, {});
    }
    else {
        content = _jsx(EmployeeDetailsCard, { employeeId: employeeId });
    }
    return (_jsx(DynamicReducerLoader, { reducers: reducers, removeAfterUnmount: true, children: _jsx(ColumnStack, { gap: "16", max: true, align: "center", className: classNames(cls.employeeDetails, [className]), children: content }) }));
});
