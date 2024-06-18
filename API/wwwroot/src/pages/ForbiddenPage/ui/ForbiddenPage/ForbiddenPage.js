import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./ForbiddenPage.module.scss";
import { useTranslation } from "react-i18next";
import { PageContainer } from "@/widgets/PageContainer";
import Padlock from "@/shared/assets/icons/padlock-icon.webp";
import { AppImage } from "@/shared/ui/AppImage";
import { TextHolder } from "@/shared/ui/TextHolder";
import { ColumnStack } from "@/shared/ui/Stack";
import { Button } from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";
import { getRouteMain } from "@/shared/consts/routerConsts";
export const ForbiddenPage = (props) => {
    const { className } = props;
    const { t } = useTranslation("translation");
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(getRouteMain());
    };
    return (_jsx(PageContainer, { className: classNames(cls.forbiddenPage, [className], {}), children: _jsxs(ColumnStack, { gap: "8", justify: "center", align: "center", children: [_jsx(TextHolder, { variant: "error", size: "l", title: t("403 FORBIDDEN") }), _jsx(AppImage, { className: classNames(cls.padlock, [className], {}), src: Padlock, width: 500 }), _jsx(TextHolder, { title: t("Oops! You've hit a wall.") }), _jsx(TextHolder, { text: t("You don’t have permission to access this area.\n") }), _jsx(TextHolder, { text: t("If you think this is a	mistake, please contact support.") }), _jsx(Button, { className: cls.btnBack, variant: "filled", onClick: handleBack, children: t("Back to main page") })] }) }));
};
