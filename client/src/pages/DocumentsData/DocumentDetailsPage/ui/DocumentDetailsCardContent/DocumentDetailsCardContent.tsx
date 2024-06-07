import { memo } from "react";
import { DocumentDetailsCardProps } from "../DocumentDetailsCard";
import { Section } from "@/shared/ui/Section";
import { ColumnStack } from "@/shared/ui/Stack";
import { DocumentDetailsData } from "../DocumentDetailsData";

export const DocumentDetailsCardContent = memo(
	function DocumentDetailsCardContent(props: DocumentDetailsCardProps) {
		const { className } = props;

		return (
			<Section max padding="16" className={className} border="partial">
				<ColumnStack gap="32" max>
					<DocumentDetailsData {...props} />
				</ColumnStack>
			</Section>
		);
	}
);
