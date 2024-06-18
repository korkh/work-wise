import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { XMLParser } from "fast-xml-parser";
import { v4 as uuidv4 } from "uuid";
import { TextHolder } from "@/shared/ui/TextHolder";
import { useTranslation } from "react-i18next";
export const XmlReader = memo(function XmlReader({ onDataParsed, }) {
    const { t } = useTranslation();
    const handleFileChange = (event) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const text = e.target?.result;
                const parser = new XMLParser({
                    ignoreAttributes: false,
                    attributeNamePrefix: "",
                    textNodeName: "_text",
                });
                const xmlData = parser.parse(text);
                const entries = xmlData.Document?.BkToCstmrStmt?.Stmt?.Ntry.map((entry) => ({
                    ...entry,
                    id: uuidv4(),
                })) || [];
                console.log("Entries:", entries);
                onDataParsed(entries);
            };
            reader.readAsText(selectedFile);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(TextHolder, { title: t("XML File Uploader and Viewer") }), _jsx("input", { type: "file", accept: ".xml", onChange: handleFileChange })] }));
});
export default XmlReader;
