import { memo } from "react";
import { EmployeeDetailsCardProps } from "../../EmployeeDetailsCard";
import { Section } from "@/shared/ui/Section";
import { ColumnStack, RowStack } from "@/shared/ui/Stack";
import { Avatar } from "@/shared/ui/Avatar";
import { ContractDetails } from "../ContractDetails";
import { PersonalInformation } from "../PersonalInformation";
import { RegistrationAddress } from "../RegistrationAddress/RegistrationAddress";
import { TransportInfo } from "../TransportInfo";
import { DocumentsData } from "../DocumentsData";

export const EmployeeDetailsCardContent = memo(
	function EmployeeDetailsCardContent(props: EmployeeDetailsCardProps) {
		const { className, data } = props;
		return (
			<Section max padding="16" className={className} border="partial">
				<ColumnStack gap="32" max>
					{data?.avatar ? (
						<RowStack justify="center" max>
							<Avatar size={200} src={data?.avatar} />
						</RowStack>
					) : (
						<RowStack justify="center" max>
							<Avatar size={200} src={data?.avatar} />
						</RowStack>
					)}
					<PersonalInformation {...props} />
					{data?.contractData && <ContractDetails {...props} />}
					<RegistrationAddress {...props} />
					{data?.transportInfo && <TransportInfo {...props} />}
					{data?.documents && <DocumentsData {...props} />}
				</ColumnStack>
			</Section>
		);
	}
);
