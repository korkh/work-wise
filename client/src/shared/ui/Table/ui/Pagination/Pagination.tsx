import { Mods, classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./Pagination.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Button } from "../../../../../shared/ui/Button";

interface PaginationProps {
	className?: string;
	totalItems: number;
	itemsPerPage: number;
	currentPage: number;
	onPageChange: (page: number) => void;
	disabled?: boolean;
	active?: boolean;
}

export const Pagination = memo(function Pagination(props: PaginationProps) {
	const {
		className,
		currentPage,
		totalItems,
		itemsPerPage,
		onPageChange,
		disabled,
		active,
	} = props;
	const { t } = useTranslation();
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	const handlePageChange = (page: number) => {
		if (page < 1 || page > totalPages) return;
		onPageChange(page);
	};

	const mods: Mods = {
		[cls.disabled]: disabled,
		[cls.active]: active,
	};

	return (
		<div className={classNames(cls.pagination, [className], {})}>
			<Button
				className={classNames(cls.paginationButton, [className], mods)}
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				{t("Previous")}
			</Button>
			{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
				<Button
					className={classNames(cls.paginationButton, [className], mods)}
					key={page}
					onClick={() => handlePageChange(page)}
					disabled={page === currentPage}
				>
					{page}
				</Button>
			))}
			<Button
				className={classNames(cls.paginationButton, [className], mods)}
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				{t("Next")}
			</Button>
		</div>
	);
});
