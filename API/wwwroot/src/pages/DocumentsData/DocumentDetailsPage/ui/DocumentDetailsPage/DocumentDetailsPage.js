import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./DocumentDetailsPage.module.scss";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { PageContainer } from "@/widgets/PageContainer";
import { DocumentDetails } from "../DocumentDetails/DocumentDetails";
const DocumentDetailsPage = (props) => {
    const { className } = props;
    const { id } = useParams();
    return (_jsx(PageContainer, { className: classNames(cls.documentDetailsPage, [className], {}), children: id && _jsx(DocumentDetails, { documentId: id }) }));
};
export default memo(DocumentDetailsPage);
