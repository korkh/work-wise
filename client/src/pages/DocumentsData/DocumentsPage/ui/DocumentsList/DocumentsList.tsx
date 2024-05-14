import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./DocumentsList.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { DocumentSortField, EmployeeDocument } from "@/entities/Document";
import { Column } from "@/shared/types/ui_components";
import { TextHolder } from "@/shared/ui/TextHolder";
import { GenericTable } from "@/shared/ui/Table";
import { ExportToExcel } from "@/features/ExportToExcel";
import { formatDate } from "@/shared/lib/utils/table/formatDate/formatDate";
import { booleanToYesNo } from "@/shared/lib/utils/table/booleanConverter/booleanConverter";
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
		{
			key: "hasTwoMonthWarning",
			header: "2m-Warrning",
			render: (value) => booleanToYesNo(value as boolean),
		},
		{
			key: "hasThreeMonthWarning",
			header: "3m-Warrning",
			render: (value) => booleanToYesNo(value as boolean),
		},
		{
			key: "hasSixMonthWarning",
			header: "6m-Warrning",
			render: (value) => booleanToYesNo(value as boolean),
		},
	];

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
			<GenericTable<EmployeeDocument, DocumentSortField>
				title="List of documents"
				columns={tableColumns}
				data={documents}
				redirect={getRouteDocumentDetails}
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
