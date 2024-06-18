import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useCallback } from "react";
import cls from "./SignInForm.module.scss";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { DynamicReducerLoader, } from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { TextHolder } from "@/shared/ui/TextHolder";
import { ColumnStack } from "@/shared/ui/Stack";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { getSignInEmail, getSignInError, getSignInLoading, getSignInPassword, } from "../..";
import { signInUser } from "../../model/services/signIn/signInUser";
import { signInActions, signInReducer } from "../../model/slices/signInSlice";
import { getRouteMain } from "@/shared/consts/routerConsts";
import { useNavigate } from "react-router-dom";
import { useForceUpdate } from "@/shared/lib/forceUpdateRender/foreceUpdateRender";
const initialReducers = {
    signInForm: signInReducer,
};
const SignInForm = memo(function SignInForm({ className, onSuccess, }) {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const email = useSelector(getSignInEmail);
    const password = useSelector(getSignInPassword);
    const isLoading = useSelector(getSignInLoading);
    const error = useSelector(getSignInError);
    const forceUpdate = useForceUpdate();
    const onChangeUsername = useCallback((value) => {
        dispatch(signInActions.setEmail(value));
    }, [dispatch]);
    const onChangePassword = useCallback((value) => {
        dispatch(signInActions.setPassword(value));
    }, [dispatch]);
    const onLoginClick = useCallback(async () => {
        const result = await dispatch(signInUser({ email, password }));
        if (result.meta.requestStatus === "fulfilled") {
            onSuccess();
            forceUpdate();
            navigate(getRouteMain());
        }
    }, [dispatch, email, password, onSuccess, forceUpdate, navigate]);
    return (_jsx(DynamicReducerLoader, { removeAfterUnmount: true, reducers: initialReducers, children: _jsxs(ColumnStack, { gap: "16", className: classNames(cls.signInForm, [className], {}), children: [_jsx(TextHolder, { title: t("Please sign in here!") }), error && (_jsx(TextHolder, { text: t("Incorrect login email or password"), variant: "error" })), _jsx(Input, { autofocus: true, type: "email", className: cls.input, placeholder: t("Email"), onChange: onChangeUsername, value: email }), _jsx(Input, { type: "password", className: cls.input, placeholder: t("Password"), onChange: onChangePassword, value: password }), _jsx(Button, { className: cls.signInBtn, onClick: onLoginClick, disabled: isLoading, children: t("Sign in") })] }) }));
});
export default SignInForm;
