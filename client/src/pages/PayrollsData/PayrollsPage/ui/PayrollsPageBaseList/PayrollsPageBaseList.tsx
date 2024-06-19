import { useTranslation } from "react-i18next";
import { memo, useEffect, useState } from "react";
import { TextHolder } from "@/shared/ui/TextHolder";
import { useSelector } from "react-redux";
import { selectAllPayrolls } from "../../model/slices/payrollPageSlice";
import {
	getPayrollPageError,
	getPayrollPageIsLoading,
} from "../../model/selectors/getPayrollsPageSelectors";
import { PayrollList } from "../../../../../pages/PayrollsData/PayrollList";
import { TableLoader } from "@/shared/ui/Table/ui/TableLoader";

interface DocumentInfiniteListProps {
	className?: string;
}

const PayrollsPageBaseList = memo(function PayrollsPageBaseList(
	props: DocumentInfiniteListProps
) {
	const { className } = props;
	const { t } = useTranslation("payrolls");

	const payrolls = useSelector(selectAllPayrolls);
	const isLoading = useSelector(getPayrollPageIsLoading);
	const error = useSelector(getPayrollPageError);

	const [payrollsLoaded, setPyrollsLoaded] = useState(false);

	useEffect(() => {
		if (payrolls && payrolls.length > 0) {
			setPyrollsLoaded(true);
		}
	}, [payrolls]);

	if (error) {
		return <TextHolder text={t("Pyrolls loading error")} />;
	}

	if (isLoading && !payrollsLoaded) {
		return <TableLoader />;
	}

	return (
		<PayrollList
			data-testid="PayrollList"
			payrolls={payrolls}
			isLoading={isLoading}
			className={className}
		/>
	);
});

export default PayrollsPageBaseList;
