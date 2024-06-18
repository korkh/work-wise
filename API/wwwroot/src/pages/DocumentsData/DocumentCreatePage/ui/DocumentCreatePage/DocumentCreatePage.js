import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./DocumentCreatePage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
const DocumentCreatePage = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (_jsx("div", { className: classNames(cls.documentCreatePage, [className], {}), children: t("DocumentCreatePage") }));
};
export default memo(DocumentCreatePage);
