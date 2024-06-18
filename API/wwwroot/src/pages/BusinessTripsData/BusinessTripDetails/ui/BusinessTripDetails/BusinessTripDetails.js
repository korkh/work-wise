import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from './BusinessTripDetails.module.scss';
import { useTranslation } from "react-i18next";
import { memo } from "react";
const BusinessTripDetails = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (_jsx("div", { className: classNames(cls.businessTripDetails, [className], {}), children: t("BusinessTripDetails") }));
};
export default memo(BusinessTripDetails);
