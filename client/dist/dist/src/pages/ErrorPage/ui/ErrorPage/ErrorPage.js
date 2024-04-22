import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import cls from "./ErrorPage.module.scss";
import { classNames } from "../../../..//shared/lib/classNames/classNames";
import { Button } from "../../../..//shared/ui/Button";
export const ErrorPage = memo(function ErrorPage({ className, error, }) {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { t } = useTranslation("translation");
    const handleBack = () => {
        navigate(from, { replace: true });
        window.location.reload();
    };
    useEffect(() => {
        if (error != null || undefined) {
            console.log("Error", error);
        }
    }, [error]);
    return (_jsxs("div", { role: "alert", className: classNames(cls.errorPage, [className], {}), children: [_jsx("h3", { children: t("Oops.. Something went wrong") }), error && (_jsxs(_Fragment, { children: [_jsx("h6", { children: error.name }), _jsx("p", { children: error.message })] })), _jsx(Button, { className: cls.btnBack, onClick: handleBack, children: t("Refresh page, please") })] }));
});
