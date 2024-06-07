import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useAuthToken } from "@/shared/lib/hooks/useAuthToken/useAuthToken";
import { getDocumentReadonly } from "@/entities/Document";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useForceUpdate } from "@/shared/lib/forceUpdateRender/foreceUpdateRender";
import { updateDocumentData } from "../../../../../entities/Document/model/services/updateDocumentData";
import { documentDetailsActions } from "../../../../../entities/Document/model/slice";
import { Section } from "@/shared/ui/Section";
import { RowStack } from "@/shared/ui/Stack";
import { TextHolder } from "@/shared/ui/TextHolder";
import { Button } from "@/shared/ui/Button";

interface DocumentDetailsCardHeaderProps {
	className?: string;
}

export const DocumentDetailsCardHeader = memo(
	function DocumentDetailsCardHeader(props: DocumentDetailsCardHeaderProps) {
		const { className } = props;
		const { t } = useTranslation();
		const userData = useAuthToken();
		const allowedToEdit = userData?.role.includes("Admin");
		const readonly = useSelector(getDocumentReadonly);
		const dispatch = useAppDispatch();
		const forceUpdate = useForceUpdate();

		const onEdit = useCallback(() => {
			dispatch(documentDetailsActions.setReadonly(false));
		}, [dispatch]);

		const onCancelEdit = useCallback(() => {
			dispatch(documentDetailsActions.cancelEdit());
		}, [dispatch]);

		const onSave = useCallback(() => {
			dispatch(updateDocumentData());
			forceUpdate();
		}, [dispatch, forceUpdate]);
		return (
			<Section padding="24" max border="partial">
				<RowStack
					max
					justify="between"
					className={classNames("", [className], {})}
				>
					<TextHolder title={t("Document details")} />
					{allowedToEdit && (
						<>
							{readonly ? (
								<Button
									onClick={onEdit}
									data-testid="EditableDocumentCardHeader.EditButton"
								>
									{t("Edit")}
								</Button>
							) : (
								<RowStack gap="8">
									<Button
										onClick={onCancelEdit}
										data-testid="EditableDocumentCardHeader.CancelButton"
										color="error"
									>
										{t("Cancel")}
									</Button>
									<Button
										onClick={onSave}
										data-testid="EditableDocumentCardHeader.SaveButton"
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
