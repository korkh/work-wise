import { memo } from "react";
import { useParams } from "react-router-dom";
import { PageContainer } from "@/widgets/PageContainer";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./EmployeeDetailsPage.module.scss";
import { EmployeeDetails } from "@/entities/Employee";

interface EmployeeDetailsPageProps {
	className?: string;
}

const EmployeeDetailsPage = (props: EmployeeDetailsPageProps) => {
	const { className } = props;
	const { id } = useParams<{ id: string }>();

	if (!id) {
		return null;
	}

	return (
		<PageContainer
			className={classNames(cls.employeeDetailsPage, [className], {})}
		>
			<EmployeeDetails employeeId={id} />
		</PageContainer>
	);
};

export default memo(EmployeeDetailsPage);
