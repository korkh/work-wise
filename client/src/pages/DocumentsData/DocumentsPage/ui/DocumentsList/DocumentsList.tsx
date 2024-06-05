import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./DocumentsList.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { EmployeeDocument } from "@/entities/Document";
import { Column } from "@/shared/types/ui_components";
import { TextHolder } from "@/shared/ui/TextHolder";
import { GenericTable } from "@/shared/ui/Table";
import { ExportToExcel } from "@/features/ExportToExcel";
import { formatDate } from "@/shared/lib/utils/table/formatDate/formatDate";
import { getRouteDocumentDetails } from "@/shared/consts/routerConsts";

interface DocumentsListProps {
	className?: string;
	documents: EmployeeDocument[];
	isLoading: boolean;
}

export const DocumentsList = memo(function DocumentsList(
	props: DocumentsListProps
) {
	const { className, documents, isLoading } = props;
	const { t } = useTranslation();

	console.log("DOCUMENTS", documents);

	const tableColumns: Column<EmployeeDocument>[] = [
		{ key: "id", header: "No." },
		{ key: "employee", nestedKeys: ["lastName"], header: "Lastname" },
		{ key: "title", header: "Title" },
		{
			key: "issueDate",
			header: "Issued",
			render: (value) => formatDate(value as string),
		},
		{
			key: "expirationDate",
			header: "Expire",
			render: (value) => formatDate(value as string),
		},
	];

	const getRowClass = (row: EmployeeDocument) => {
		if (
			row.hasTwoMonthWarning &&
			row.hasThreeMonthWarning &&
			row.hasSixMonthWarning
		) {
			return cls.redRow;
		} else if (row.hasThreeMonthWarning && row.hasSixMonthWarning) {
			return cls.orangeRow;
		} else if (row.hasSixMonthWarning) {
			return cls.yellowRow;
		} else {
			return "";
		}
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!isLoading && !documents.length) {
		return (
			<div className={classNames(cls.documentsList, [className], {})}>
				<TextHolder size={"l"} title={t("Documents not found")} />
			</div>
		);
	}

	return (
		<>
			<GenericTable<EmployeeDocument>
				title="List of documents"
				columns={tableColumns}
				data={documents}
				redirect={getRouteDocumentDetails}
				getRowClass={getRowClass}
			>
				<ExportToExcel
					data={documents}
					isLoading={isLoading}
					fileName="Documents"
				/>
			</GenericTable>
		</>
	);
});
