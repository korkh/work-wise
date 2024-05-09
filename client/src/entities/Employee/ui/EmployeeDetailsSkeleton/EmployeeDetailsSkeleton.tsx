import { Skeleton } from "@/shared/ui/Skeleton";
import { RowStack } from "@/shared/ui/Stack";
import { Section } from "@/shared/ui/Section";

const EmployeeDetailsSkeleton = () => {
	return (
		<Section padding="24" max>
			<RowStack gap="32">
				<RowStack max justify="center">
					<Skeleton border="100%" width={128} height={128} />
				</RowStack>
				<RowStack gap="32" max>
					<RowStack gap="16" max>
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
					</RowStack>

					<RowStack gap="16" max>
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
					</RowStack>
				</RowStack>
			</RowStack>
		</Section>
	);
};

export default EmployeeDetailsSkeleton;
