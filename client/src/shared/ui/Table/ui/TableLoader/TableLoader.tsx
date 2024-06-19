import { memo } from "react";
import { Section } from "../../../../../shared/ui/Section";
import { Skeleton } from "../../../../../shared/ui/Skeleton";
import { ColumnStack, RowStack } from "../../../../../shared/ui/Stack";

export const TableLoader = memo(function TableLoader() {
	return (
		<Section padding="24" max>
			<ColumnStack gap="32">
				<RowStack gap="32" max>
					<Skeleton width="90%" height={38} />
					<Skeleton width="10%" height={38} />
				</RowStack>
				<RowStack gap="32" max>
					<RowStack gap="16" max>
						<RowStack max justify="center">
							<Skeleton border="100%" width={38} height={38} />
						</RowStack>
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
					</RowStack>
				</RowStack>
				<RowStack gap="32" max>
					<RowStack gap="16" max>
						<RowStack max justify="center">
							<Skeleton border="100%" width={38} height={38} />
						</RowStack>
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
					</RowStack>
				</RowStack>
				<RowStack gap="32" max>
					<RowStack gap="16" max>
						<RowStack max justify="center">
							<Skeleton border="100%" width={38} height={38} />
						</RowStack>
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
					</RowStack>
				</RowStack>
				<RowStack gap="32" max>
					<RowStack gap="16" max>
						<RowStack max justify="center">
							<Skeleton border="100%" width={38} height={38} />
						</RowStack>
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
					</RowStack>
				</RowStack>
			</ColumnStack>
		</Section>
	);
});
