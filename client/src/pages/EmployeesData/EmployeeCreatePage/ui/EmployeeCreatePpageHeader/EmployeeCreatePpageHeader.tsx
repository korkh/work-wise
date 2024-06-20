import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/Button";
import { Section } from "@/shared/ui/Section";
import { RowStack } from "@/shared/ui/Stack";
import { TextHolder } from "@/shared/ui/TextHolder";
import { classNames } from "@/shared/lib/utils/classNames/classNames";

interface EmployeeCreatePpageHeaderProps {
	className?: string;
	onSave: () => void;
}

export const EmployeeCreatePpageHeader = memo(
	function EmployeeCreatePpageHeader({
		className,
		onSave,
	}: EmployeeCreatePpageHeaderProps) {
		const { t } = useTranslation("employees");

		const onCancelEdit = useCallback(() => {
			// Handle cancel action
		}, []);

		return (
			<Section padding="24" max border="partial">
				<RowStack
					max
					justify="between"
					className={classNames("", [className], {})}
				>
					<TextHolder title={t("Employee details")} />
					<RowStack gap="8">
						<Button
							onClick={onCancelEdit}
							data-testid="EditableProfileCardHeader.CancelButton"
							color="error"
						>
							{t("Cancel")}
						</Button>
						<Button
							onClick={onSave}
							data-testid="EditableProfileCardHeader.SaveButton"
							color="success"
						>
							{t("Save")}
						</Button>
					</RowStack>
				</RowStack>
			</Section>
		);
	}
);
