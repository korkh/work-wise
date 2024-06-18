import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./Pagination.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Button } from "../../../../../shared/ui/Button";
export const Pagination = memo(function Pagination(props) {
    const { className, currentPage, totalItems, itemsPerPage, onPageChange, disabled, active, } = props;
    const { t } = useTranslation();
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages)
            return;
        onPageChange(page);
    };
    const mods = {
        [cls.disabled]: disabled,
        [cls.active]: active,
    };
    return (_jsxs("div", { className: classNames(cls.pagination, [className], {}), children: [_jsx(Button, { className: classNames(cls.paginationButton, [className], mods), onClick: () => handlePageChange(currentPage - 1), disabled: currentPage === 1, children: t("Previous") }), Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (_jsx(Button, { className: classNames(cls.paginationButton, [className], mods), onClick: () => handlePageChange(page), disabled: page === currentPage, children: page }, page))), _jsx(Button, { className: classNames(cls.paginationButton, [className], mods), onClick: () => handlePageChange(currentPage + 1), disabled: currentPage === totalPages, children: t("Next") })] }));
});
