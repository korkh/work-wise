import { Skeleton } from "@/shared/ui/Skeleton";
import { ColumnStack, RowStack } from "@/shared/ui/Stack";
import { BaseLayout } from "../BaseLayout";
import cls from "./AppLoaderLayout.module.scss";
import { memo } from "react";

export const AppLoaderLayout = memo(function AppLoaderLayout() {
	return (
		<BaseLayout
			navbar={
				<RowStack className={cls.header}>
					<Skeleton width={"100%"} height={40} border="50%" />
				</RowStack>
			}
			content={
				<ColumnStack gap="16" style={{ height: "100%" }}>
					<Skeleton width="70%" height={32} border="16px" />
					<Skeleton width="40%" height={20} border="16px" />
					<Skeleton width="50%" height={20} border="16px" />
					<Skeleton width="30%" height={32} border="16px" />
					<Skeleton width="80%" height="40%" border="16px" />
					<Skeleton width="80%" height="40%" border="16px" />
				</ColumnStack>
			}
		/>
	);
});
