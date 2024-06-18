import ExcelJS from "exceljs";
export async function exportToExcel({ data, fileName, department, }) {
    if (data.length === 0)
        return;
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Data");
    // Setting workbook properties
    workbook.creator = department;
    workbook.lastModifiedBy = fileName;
    workbook.created = new Date();
    workbook.modified = new Date();
    workbook.properties.date1904 = true;
    // Define columns based on the keys of the first item
    const columns = Object.keys(data[0]).map((key) => ({
        header: key.toUpperCase(),
        key: key,
        width: 20,
    }));
    worksheet.columns = columns;
    // Add rows
    worksheet.addRows(data);
    // Style the header row
    const headerRow = worksheet.getRow(1);
    headerRow.font = { bold: true };
    headerRow.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFFF00" },
        bgColor: { argb: "FF0000" },
    };
    headerRow.border = {
        top: { style: "thin", color: { argb: "000000" } },
        left: { style: "thin", color: { argb: "000000" } },
        bottom: { style: "thin", color: { argb: "000000" } },
        right: { style: "thin", color: { argb: "000000" } },
    };
    headerRow.height = 20; // set row height
    // Save
    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), `${fileName}.xlsx`);
}
// Helper to trigger browser download
function saveAs(blob, fileName) {
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    window.URL.revokeObjectURL(link.href);
}
