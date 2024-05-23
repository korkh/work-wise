import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./AccountantPanelPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useState } from "react";
import { TextHolder } from "@/shared/ui/TextHolder";
import { Ntry, XmlReader } from "@/features/XmlReader";
import { ColumnStack, RowStack } from "@/shared/ui/Stack";
import { GenericTable } from "@/shared/ui/Table";
import { ntryColumns } from "../../consts/ntryColumns";
import { ExportToExcel } from "@/features/ExportToExcel";

interface AccountantPanelPageProps {
	className?: string;
}

const AccountantPanelPage = (props: AccountantPanelPageProps) => {
	const { className } = props;
	const { t } = useTranslation();
	const [data, setData] = useState<Ntry[]>([]);

	const handleDataParsed = (parsedData: Ntry[]) => {
		setData(parsedData);
	};

	return (
		<RowStack max justify="center">
			<ColumnStack
				gap="32"
				className={classNames(cls.accountantPanelPage, [className], {})}
			>
				<XmlReader onDataParsed={handleDataParsed} />
				{data.length > 0 && (
					<GenericTable<Ntry, keyof Ntry>
						title="List of XML Entries"
						columns={ntryColumns}
						data={data}
						verticalHeaders
					>
						<ExportToExcel data={data} fileName="Employees" />
					</GenericTable>
				)}
				<TextHolder
					variant="error"
					size="m"
					text={t("Acceess granted only for accountants! Welcome!")}
					className={cls.welcome}
				/>
			</ColumnStack>
		</RowStack>
	);
};

export default memo(AccountantPanelPage);
