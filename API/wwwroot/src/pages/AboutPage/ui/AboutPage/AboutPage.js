import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./AboutPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { PageContainer } from "@/widgets/PageContainer";
const AboutPage = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (_jsx(PageContainer, { className: classNames(cls.aboutPage, [className], {}), children: t("AboutPage") }));
};
export default memo(AboutPage);
