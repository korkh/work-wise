import { formatDate } from "@/shared/lib/utils/table/formatDate/formatDate";
import { useTranslation } from "react-i18next";
export const getBusinessTripsColumns = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = useTranslation("businessTrip");
    return [
        { key: "id", header: "No.", notEditable: true },
        {
            key: "employee",
            nestedKeys: ["avatar"],
            header: t("Photo"),
            uniqueId: "avatar",
            notEditable: true,
        },
        {
            key: "employee",
            nestedKeys: ["lastName"],
            header: t("Lastname"),
            notEditable: true,
        },
        {
            key: "laikotarpis",
            header: t("Date"),
            render: (value) => formatDate(value),
        },
        {
            key: "alga",
            header: t("Salary"),
        },
        {
            key: "dienpinigai",
            header: t("Daily allowance"),
        },
        {
            key: "bankas",
            header: t("Bank"),
        },
        {
            key: "baudos",
            header: t("Fines"),
        },
        {
            key: "likutis",
            header: t("Balance"),
        },
    ];
};
