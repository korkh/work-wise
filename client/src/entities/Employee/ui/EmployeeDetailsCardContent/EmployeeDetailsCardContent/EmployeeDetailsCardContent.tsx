import { memo } from "react";
import { EmployeeDetailsCardProps } from "../../EmployeeDetailsCard";
import { Section } from "@/shared/ui/Section";
import { ColumnStack, RowStack } from "@/shared/ui/Stack";
import { Avatar } from "@/shared/ui/Avatar";

import { TextHolder } from "@/shared/ui/TextHolder";
import { ContractDetails } from "../ContractDetails";
import { PersonalInformation } from "../PersonalInformation";
import { RegistrationAddress } from "../RegistrationAddress/RegistrationAddress";
import { TransportInfo } from "../TransportInfo";

export const EmployeeDetailsCardContent = memo(
	function EmployeeDetailsCardContent(props: EmployeeDetailsCardProps) {
		const { className, data } = props;
		return (
			<Section max padding="16" className={className} border="partial">
				<ColumnStack gap="16" max>
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
					<ContractDetails {...props} />
					<RegistrationAddress {...props} />
					<TransportInfo {...props} />
					<TextHolder title={"Documents data"} />
					{data?.documents?.map((doc) => (
						<>
							<TextHolder key={doc.title} text={doc.title} />
							<TextHolder
								key={doc.expirationDate.toString()}
								text={doc.expirationDate.toString()}
							/>
							<TextHolder
								key={doc.issueDate.toString()}
								text={doc.issueDate.toString()}
							/>
						</>
					))}
					<TextHolder text={"Payrolls here"} />
				</ColumnStack>
			</Section>
		);
	}
);
