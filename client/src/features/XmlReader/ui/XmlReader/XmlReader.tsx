import React, { memo } from "react";
import { XMLParser } from "fast-xml-parser";
import { Ntry, XmlData } from "../../model/types/xmlReader";
import { v4 as uuidv4 } from "uuid";
import { TextHolder } from "@/shared/ui/TextHolder";
import { useTranslation } from "react-i18next";

interface XmlReaderProps {
	onDataParsed: (data: Ntry[]) => void;
}

export const XmlReader: React.FC<XmlReaderProps> = memo(function XmlReader({
	onDataParsed,
}) {
	const { t } = useTranslation();
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files?.[0];
		if (selectedFile) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const text = e.target?.result as string;
				const parser = new XMLParser({
					ignoreAttributes: false,
					attributeNamePrefix: "",
					textNodeName: "_text",
				});
				const xmlData: XmlData = parser.parse(text);
				const entries =
					xmlData.Document?.BkToCstmrStmt?.Stmt?.Ntry.map((entry) => ({
						...entry,
						id: uuidv4(),
					})) || [];

				console.log("Entries:", entries);
				onDataParsed(entries);
			};
			reader.readAsText(selectedFile);
		}
	};

	return (
		<>
			<TextHolder title={t("XML File Uploader and Viewer")} />
			<input type="file" accept=".xml" onChange={handleFileChange} />
		</>
	);
});

export default XmlReader;
