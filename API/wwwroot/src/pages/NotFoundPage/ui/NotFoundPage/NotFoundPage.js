import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cls from "./NotFoundPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { TextHolder } from "@/shared/ui/TextHolder";
import { ColumnStack } from "@/shared/ui/Stack";
import { useNavigate } from "react-router-dom";
import { getRouteMain } from "@/shared/consts/routerConsts";
import { Button } from "@/shared/ui/Button";
import { Glyph } from "@/shared/ui/Glyph";
import Astronaut from "@/shared/assets/icons/astronaut.svg?react";
import { PageContainer } from "@/widgets/PageContainer";
const NotFoundPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const goHome = () => {
        navigate(getRouteMain());
    };
    return (_jsx(PageContainer, { children: _jsxs(ColumnStack, { gap: "8", align: "center", max: true, children: [_jsx(TextHolder, { variant: "error", title: "404 PAGE NOT FOUND" }), _jsx("div", { style: { margin: 50 } }), _jsx(Glyph, { SvgImage: Astronaut, className: cls.astronaut }), _jsx("div", { className: cls.starsBackground }), _jsx("div", { style: { margin: 20 } }), _jsx(TextHolder, { title: "Oops! Lost in Space..." }), _jsx(TextHolder, { text: t("Unfortunately the page you were looking for could not be found.") }), _jsx(TextHolder, { text: t("It may be temporarily unavailable, moved or no longer exist.") }), _jsx(TextHolder, { text: t("Check the URL you entered for any mistakes and try again.") }), _jsx(TextHolder, { text: t("Alternatively, search for whatever is missing or take a look around the rest of our site.") }), _jsx(Button, { onClick: goHome, className: cls.homeButton, children: t("Take Me Home") })] }) }));
};
export default memo(NotFoundPage);
