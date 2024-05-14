import { memo } from "react";
import { RowStack, ColumnStack } from "@/shared/ui/Stack";
import { TextHolder } from "@/shared/ui/TextHolder";
import { EmployeeDetailsCardProps } from "../../EmployeeDetailsCard";
import { toast } from "react-toastify";
import { EmployeeDocument } from "@/entities/Document";
import { Input } from "@/shared/ui/Input";
import { useTranslation } from "react-i18next";
import { DateInput } from "@/shared/ui/DateInput";

export const DocumentsData = memo(function DocumentsData(
	props: EmployeeDetailsCardProps
) {
	const {
		data,
		readonly,
		onChangeDocumentTitle,
		onChangeDocumentIssueDate,
		onChangeDocumentExpirationDate,
	} = props;

	const { t } = useTranslation();
	if (!data && data !== undefined) {
		toast.error("NO DOCUMENTS FOUND. TRY AGAIN LATER");
		return <TextHolder title="NO DOCUMENTS FOUND!" />;
	}
	return (
		<RowStack gap="24" max>
			<ColumnStack gap="16" max>
				<TextHolder title={"Employee's documents"} />
				{data?.documents?.map((doc: EmployeeDocument, index) => (
					<>
						<Input
							size="s"
							width="97%"
							value={doc.title}
							label={t("Title")}
							onChange={(newTitle) =>
								onChangeDocumentTitle && onChangeDocumentTitle(index, newTitle)
							}
							readonly={readonly}
							data-testid="DocumentsData.title"
						/>
						<DateInput
							gap="8"
							width="93%"
							label={t("Issue date")}
							selected={doc.issueDate}
							onChange={(newDate, event) =>
								onChangeDocumentIssueDate &&
								onChangeDocumentIssueDate(index, newDate, event)
							}
							readonly={readonly}
							data-testid="DocumentsData.issueDate"
						/>
						<DateInput
							gap="8"
							width="92%"
							selected={doc.expirationDate}
							onChange={(newDate, event) =>
								onChangeDocumentExpirationDate &&
								onChangeDocumentExpirationDate(index, newDate, event)
							}
							label={t("Expire date")}
							readonly={readonly}
							data-testid="DocumentsData.expirationDate"
						/>
					</>
				))}
			</ColumnStack>
		</RowStack>
	);
});
