import { Ntry } from "@/features/XmlReader";
import { Column } from "@/shared/types/ui_components";

export const ntryColumns: Column<Ntry>[] = [
	{ key: "Amt", header: "Amount", nestedKeys: ["_text"], uniqueId: "amount" },
	{ key: "Amt", header: "Currency", nestedKeys: ["Ccy"], uniqueId: "currency" },
	{ key: "CdtDbtInd", header: "Credit/Debit", uniqueId: "creditDebit" },
	{
		key: "ValDt",
		header: "Value Date",
		nestedKeys: ["Dt"],
		uniqueId: "valueDate",
	},
	{
		key: "NtryDtls",
		header: "Account Servicer Ref",
		nestedKeys: ["TxDtls", "Refs", "AcctSvcrRef"],
		uniqueId: "accountServicerRef",
	},
	{
		key: "NtryDtls",
		header: "Transaction Amount",
		nestedKeys: ["TxDtls", "AmtDtls", "TxAmt", "Amt", "_text"],
		uniqueId: "transactionAmount",
	},
	{
		key: "NtryDtls",
		header: "Debtor Name",
		nestedKeys: ["TxDtls", "RltdPties", "Dbtr", "Nm"],
		uniqueId: "debtorName",
	},
	{
		key: "NtryDtls",
		header: "Debtor Country",
		nestedKeys: ["TxDtls", "RltdPties", "Dbtr", "PstlAdr", "Ctry"],
		uniqueId: "debtorCountry",
	},
	{
		key: "NtryDtls",
		header: "Debtor Address",
		nestedKeys: ["TxDtls", "RltdPties", "Dbtr", "PstlAdr", "AdrLine"],
		uniqueId: "debtorAddress",
	},
	{
		key: "NtryDtls",
		header: "Debtor IBAN",
		nestedKeys: ["TxDtls", "RltdPties", "DbtrAcct", "Id", "IBAN"],
		uniqueId: "debtorIban",
	},
	{
		key: "NtryDtls",
		header: "Creditor Name",
		nestedKeys: ["TxDtls", "RltdPties", "Cdtr", "Nm"],
		uniqueId: "creditorName",
	},
	{
		key: "NtryDtls",
		header: "Creditor IBAN",
		nestedKeys: ["TxDtls", "RltdPties", "CdtrAcct", "Id", "IBAN"],
		uniqueId: "creditorIban",
	},
	{
		key: "NtryDtls",
		header: "Debtor Agent BIC",
		nestedKeys: ["TxDtls", "RltdAgts", "DbtrAgt", "FinInstnId", "BIC"],
		uniqueId: "debtorAgentBic",
	},
	{
		key: "NtryDtls",
		header: "Debtor Agent Name",
		nestedKeys: ["TxDtls", "RltdAgts", "DbtrAgt", "FinInstnId", "Nm"],
		uniqueId: "debtorAgentName",
	},
	{
		key: "NtryDtls",
		header: "Creditor Agent BIC",
		nestedKeys: ["TxDtls", "RltdAgts", "CdtrAgt", "FinInstnId", "BIC"],
		uniqueId: "creditorAgentBic",
	},
	{
		key: "NtryDtls",
		header: "Creditor Agent Name",
		nestedKeys: ["TxDtls", "RltdAgts", "CdtrAgt", "FinInstnId", "Nm"],
		uniqueId: "creditorAgentName",
	},
	{
		key: "NtryDtls",
		header: "Remittance Info",
		nestedKeys: ["TxDtls", "RmtInf", "Ustrd"],
		uniqueId: "remittanceInfo",
	},
];