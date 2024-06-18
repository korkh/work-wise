import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Section } from "@/shared/ui/Section";
import { RowStack } from "@/shared/ui/Stack";
import { TextHolder } from "@/shared/ui/TextHolder";
import { useAuthToken } from "@/shared/lib/hooks/useAuthToken/useAuthToken";
import { useSelector } from "react-redux";
import { getEmployeeReadonly } from "../../model/selectors/employeeDetails";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { employeeDetailsActions } from "../../model/slices/employeeDetailsSlice";
import { updateEmployeeData } from "../../model/services/updateEmployeeData/updateEmployeeData";
import { Button } from "@/shared/ui/Button";
import { useForceUpdate } from "@/shared/lib/forceUpdateRender/foreceUpdateRender";
export const EmployeeDetailsCardHeader = memo(function EmployeeDetailsCardHeader(props) {
    const { className } = props;
    const { t } = useTranslation();
    const userData = useAuthToken();
    const allowedToEdit = userData?.role.includes("Admin");
    const readonly = useSelector(getEmployeeReadonly);
    const dispatch = useAppDispatch();
    const forceUpdate = useForceUpdate();
    const onEdit = useCallback(() => {
        dispatch(employeeDetailsActions.setReadonly(false));
    }, [dispatch]);
    const onCancelEdit = useCallback(() => {
        dispatch(employeeDetailsActions.cancelEdit());
    }, [dispatch]);
    const onSave = useCallback(() => {
        dispatch(updateEmployeeData());
        forceUpdate();
    }, [dispatch, forceUpdate]);
    return (_jsx(Section, { padding: "24", max: true, border: "partial", children: _jsxs(RowStack, { max: true, justify: "between", className: classNames("", [className], {}), children: [_jsx(TextHolder, { title: t("Employee details") }), allowedToEdit && (_jsx(_Fragment, { children: readonly ? (_jsx(Button, { onClick: onEdit, "data-testid": "EditableProfileCardHeader.EditButton", children: t("Edit") })) : (_jsxs(RowStack, { gap: "8", children: [_jsx(Button, { onClick: onCancelEdit, "data-testid": "EditableProfileCardHeader.CancelButton", color: "error", children: t("Cancel") }), _jsx(Button, { onClick: onSave, "data-testid": "EditableProfileCardHeader.SaveButton", color: "success", children: t("Save") })] })) }))] }) }));
});
