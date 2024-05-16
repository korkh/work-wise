import { Identifiable } from "@/shared/types/ui_components";

export interface Amt {
	_text: string;
	Ccy: string;
}

export interface Ntry extends Identifiable {
	id: string; //needs for table
	Amt: Amt;
	CdtDbtInd: string;
	Sts: string;
	BookgDt: {
		DtTm: string;
	};
	ValDt: {
		Dt: string;
	};
	BkTxCd: {
		Domn: {
			Cd: string;
			Fmly: {
				Cd: string;
				SubFmlyCd: string;
			};
		};
		Prtry: {
			Cd: string;
		};
	};
	NtryDtls: {
		TxDtls: {
			Refs: {
				AcctSvcrRef: string;
				InstrId: string;
				EndToEndId: string;
			};
			AmtDtls: {
				InstdAmt: Amt;
				TxAmt: Amt;
				PrtryAmt: {
					Tp: string;
					Amt: Amt;
				};
			};
			RltdPties: {
				Dbtr?: {
					Nm: string;
					PstlAdr: {
						Ctry: string;
						AdrLine: string;
					};
				};
				DbtrAcct?: {
					Id: {
						IBAN: string;
					};
				};
				Cdtr?: {
					Nm: string;
				};
				CdtrAcct?: {
					Id: {
						IBAN: string;
					};
				};
			};
			RltdAgts: {
				DbtrAgt?: {
					FinInstnId: {
						BIC: string;
						Nm: string;
					};
				};
				CdtrAgt?: {
					FinInstnId: {
						BIC: string;
						Nm: string;
					};
				};
			};
			RmtInf: {
				Ustrd: string;
			};
		};
	};
}

export interface XmlData {
	Document: {
		BkToCstmrStmt: {
			Stmt: {
				Ntry: Ntry[];
			};
		};
	};
}

export interface SearchResult {
	[key: string]: string;
}
