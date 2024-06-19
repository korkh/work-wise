import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { Section } from "@/shared/ui/Section";
import { RowStack } from "@/shared/ui/Stack";
import { TextHolder } from "@/shared/ui/TextHolder";
import { useAuthToken } from "@/shared/lib/hooks/useAuthToken/useAuthToken";
import { useSelector } from "react-redux";
import { getEmployeeReadonly, getEmployeeForm, } from "../../model/selectors/employeeDetails";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { employeeDetailsActions } from "../../model/slices/employeeDetailsSlice";
import { updateEmployeeData } from "../../model/services/updateEmployeeData/updateEmployeeData";
import { Button } from "@/shared/ui/Button";
import { useForceUpdate } from "@/shared/lib/forceUpdateRender/foreceUpdateRender";
import { deleteEmployeeById } from "../../model/services/deleteEmployeeById/deleteEmployeeById";
import { useNavigate } from "react-router-dom";
import { getRouteEmployees } from "@/shared/consts/routerConsts";
export const EmployeeDetailsCardHeader = memo(function EmployeeDetailsCardHeader(props) {
    const { className } = props;
    const { t } = useTranslation();
    const userData = useAuthToken();
    const allowedToEdit = userData?.role.includes("Admin");
    const readonly = useSelector(getEmployeeReadonly);
    const employeeForm = useSelector(getEmployeeForm);
    const [isDeleting, setIsDeleting] = useState(false);
    const dispatch = useAppDispatch();
    const forceUpdate = useForceUpdate();
    const navigate = useNavigate();
    const onEdit = useCallback(() => {
        dispatch(employeeDetailsActions.setReadonly(false));
    }, [dispatch]);
    const onDelete = useCallback(() => {
        dispatch(employeeDetailsActions.setReadonly(false));
        setIsDeleting(true);
    }, [dispatch]);
    const onCancelEdit = useCallback(() => {
        dispatch(employeeDetailsActions.cancelEdit());
    }, [dispatch]);
    const onSave = useCallback(() => {
        dispatch(updateEmployeeData());
        forceUpdate();
    }, [dispatch, forceUpdate]);
    const onDeleteHandle = useCallback(() => {
        if (employeeForm?.id) {
            dispatch(deleteEmployeeById(String(employeeForm.id)));
        }
        navigate(getRouteEmployees());
    }, [dispatch, employeeForm?.id, navigate]);
    return (_jsx(Section, { padding: "24", max: true, border: "partial", children: _jsxs(RowStack, { max: true, justify: "between", className: classNames("", [className], {}), children: [_jsx(TextHolder, { title: t("Employee details") }), allowedToEdit && (_jsx(_Fragment, { children: readonly ? (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: onEdit, "data-testid": "EditableProfileCardHeader.EditButton", children: t("Edit") }), _jsx(Button, { onClick: onDelete, "data-testid": "EditableProfileCardHeader.DeleteButton", children: t("Delete") })] })) : (_jsxs(RowStack, { gap: "8", children: [_jsx(Button, { onClick: onCancelEdit, "data-testid": "EditableProfileCardHeader.CancelButton", color: "error", children: t("Cancel") }), _jsx(Button, { onClick: isDeleting ? onDeleteHandle : onSave, "data-testid": "EditableProfileCardHeader.SaveButton", color: "success", children: t("Confirm") })] })) }))] }) }));
});
