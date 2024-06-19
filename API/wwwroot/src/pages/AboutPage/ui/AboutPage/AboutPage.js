import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./AboutPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { PageContainer } from "@/widgets/PageContainer";
import { TextHolder } from "@/shared/ui/TextHolder";
import { ColumnStack } from "@/shared/ui/Stack";
const AboutPage = (props) => {
    const { className } = props;
    const { t } = useTranslation("translation");
    return (_jsx(PageContainer, { className: classNames(cls.aboutPage, [className], {}), children: _jsxs(ColumnStack, { children: [_jsx(TextHolder, { title: t("Information for testing application:") }), _jsx(TextHolder, { text: t("Accountant") }), _jsx(TextHolder, { text: t("- Email: zivile@test.com") }), _jsx(TextHolder, { text: t("- Password: Pa$$w0rd") }), _jsx("br", {}), _jsx(TextHolder, { text: t("Admin") }), _jsx(TextHolder, { text: t("- Email: peter@test.com") }), _jsx(TextHolder, { text: t("- Password: Pa$$w0rd") }), _jsx("br", {}), _jsx(TextHolder, { text: t("Manager") }), _jsx(TextHolder, { text: t("- Email: evaldas@test.com") }), _jsx(TextHolder, { text: t("- Password: Pa$$w0rd") })] }) }));
};
export default memo(AboutPage);
