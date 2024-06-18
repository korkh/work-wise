import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useAuthToken } from "@/shared/lib/hooks/useAuthToken/useAuthToken";
import { getDocumentReadonly } from "@/entities/Document";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useForceUpdate } from "@/shared/lib/forceUpdateRender/foreceUpdateRender";
import { updateDocumentData } from "../../../../../entities/Document/model/services/updateDocumentData";
import { documentDetailsActions } from "../../../../../entities/Document/model/slice";
import { Section } from "@/shared/ui/Section";
import { RowStack } from "@/shared/ui/Stack";
import { TextHolder } from "@/shared/ui/TextHolder";
import { Button } from "@/shared/ui/Button";
export const DocumentDetailsCardHeader = memo(function DocumentDetailsCardHeader(props) {
    const { className } = props;
    const { t } = useTranslation();
    const userData = useAuthToken();
    const allowedToEdit = userData?.role.includes("Admin");
    const readonly = useSelector(getDocumentReadonly);
    const dispatch = useAppDispatch();
    const forceUpdate = useForceUpdate();
    const onEdit = useCallback(() => {
        dispatch(documentDetailsActions.setReadonly(false));
    }, [dispatch]);
    const onCancelEdit = useCallback(() => {
        dispatch(documentDetailsActions.cancelEdit());
    }, [dispatch]);
    const onSave = useCallback(() => {
        dispatch(updateDocumentData());
        forceUpdate();
    }, [dispatch, forceUpdate]);
    return (_jsx(Section, { padding: "24", max: true, border: "partial", children: _jsxs(RowStack, { max: true, justify: "between", className: classNames("", [className], {}), children: [_jsx(TextHolder, { title: t("Document details") }), allowedToEdit && (_jsx(_Fragment, { children: readonly ? (_jsx(Button, { onClick: onEdit, "data-testid": "EditableDocumentCardHeader.EditButton", children: t("Edit") })) : (_jsxs(RowStack, { gap: "8", children: [_jsx(Button, { onClick: onCancelEdit, "data-testid": "EditableDocumentCardHeader.CancelButton", color: "error", children: t("Cancel") }), _jsx(Button, { onClick: onSave, "data-testid": "EditableDocumentCardHeader.SaveButton", color: "success", children: t("Save") })] })) }))] }) }));
});
