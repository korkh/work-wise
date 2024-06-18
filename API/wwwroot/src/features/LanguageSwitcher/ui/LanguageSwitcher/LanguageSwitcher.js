import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Button } from "@/shared/ui/Button";
export const LanguageSwitcher = memo(function LanguageSwitcher(props) {
    const { className, abbreviated } = props;
    const { t, i18n } = useTranslation();
    const toggle = async () => {
        i18n.changeLanguage(i18n.language === "lt" ? "en" : "lt");
    };
    return (_jsx(Button, { variant: "clear", onClick: toggle, className: classNames("", [className], {}), children: t(abbreviated ? "Abbreviated language" : "Language") }));
});
