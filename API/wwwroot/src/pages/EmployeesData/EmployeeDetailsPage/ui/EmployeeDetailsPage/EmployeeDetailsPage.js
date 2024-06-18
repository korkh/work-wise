import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { PageContainer } from "@/widgets/PageContainer";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./EmployeeDetailsPage.module.scss";
import { EmployeeDetails } from "@/entities/Employee";
const EmployeeDetailsPage = (props) => {
    const { className } = props;
    const { id } = useParams();
    if (!id) {
        return null;
    }
    return (_jsx(PageContainer, { className: classNames(cls.employeeDetailsPage, [className], {}), children: _jsx(EmployeeDetails, { employeeId: id }) }));
};
export default memo(EmployeeDetailsPage);
