import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./DocumentEditPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
const DocumentEditPage = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (_jsx("div", { className: classNames(cls.documentEditPage, [className], {}), children: t("DocumentEditPage") }));
};
export default memo(DocumentEditPage);
