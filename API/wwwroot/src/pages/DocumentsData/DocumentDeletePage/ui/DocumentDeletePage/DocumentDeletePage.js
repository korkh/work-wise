import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./DocumentDeletePage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
const DocumentDeletePage = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (_jsx("div", { className: classNames(cls.documentDeletePage, [className], {}), children: t("DocumentDeletePage") }));
};
export default memo(DocumentDeletePage);
