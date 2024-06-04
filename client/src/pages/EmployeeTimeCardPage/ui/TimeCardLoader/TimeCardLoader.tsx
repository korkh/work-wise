import { memo } from "react";
import { ColumnStack } from "@/shared/ui/Stack";
import { Skeleton } from "@/shared/ui/Skeleton";

export const TimeCardLoader = memo(function TimeCardLoader() {
	return (
		<ColumnStack gap="16" style={{ height: "100%" }} max>
			<Skeleton width="80%" height="40%" border="16px" />
			<Skeleton width="80%" height="40%" border="16px" />
			<Skeleton width="80%" height="40%" border="16px" />
			<Skeleton width="80%" height="40%" border="16px" />
			<Skeleton width="80%" height="40%" border="16px" />
			<Skeleton width="80%" height="40%" border="16px" />
		</ColumnStack>
	);
});
