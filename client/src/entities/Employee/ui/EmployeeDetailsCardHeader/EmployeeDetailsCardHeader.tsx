import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Section } from "@/shared/ui/Section";
import { RowStack } from "@/shared/ui/Stack";
import { TextHolder } from "@/shared/ui/TextHolder";
import { useAuthToken } from "@/shared/lib/hooks/useAuthToken/useAuthToken";
import { useSelector } from "react-redux";
import { getEmployeeReadonly } from "../../model/selectors/employeeDetails";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { employeeDetailsActions } from "../../model/slices/employeeDetailsSlice";
import { updateEmployeeData } from "../../model/services/updateEmployeeData/updateEmployeeData";
import { Button } from "@/shared/ui/Button";
import { useForceUpdate } from "@/shared/lib/forceUpdateRender/foreceUpdateRender";

interface EmployeeDetailsCardHeaderProps {
	className?: string;
}

export const EmployeeDetailsCardHeader = memo(
	function EmployeeDetailsCardHeader(props: EmployeeDetailsCardHeaderProps) {
		const { className } = props;
		const { t } = useTranslation();
		const userData = useAuthToken();
		const allowedToEdit = userData?.role.includes("Admin");
		const readonly = useSelector(getEmployeeReadonly);
		const dispatch = useAppDispatch();
		const forceUpdate = useForceUpdate();

		const onEdit = useCallback(() => {
			dispatch(employeeDetailsActions.setReadonly(false));
		}, [dispatch]);

		const onCancelEdit = useCallback(() => {
			dispatch(employeeDetailsActions.cancelEdit());
		}, [dispatch]);

		const onSave = useCallback(() => {
			dispatch(updateEmployeeData());
			forceUpdate();
		}, [dispatch, forceUpdate]);

		return (
			<Section padding="24" max border="partial">
				<RowStack
					max
					justify="between"
					className={classNames("", [className], {})}
				>
					<TextHolder title={t("Employee details")} />
					{allowedToEdit && (
						<>
							{readonly ? (
								<Button
									onClick={onEdit}
									data-testid="EditableProfileCardHeader.EditButton"
								>
									{t("Edit")}
								</Button>
							) : (
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
							)}
						</>
					)}
				</RowStack>
			</Section>
		);
	}
);
