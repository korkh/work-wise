import { memo, useEffect, useState } from "react";
import { useMobile } from "@/shared/lib/hooks/useMobile/useMobile";
import { TextHolder } from "../TextHolder";
import { ColumnStack } from "../Stack";
import { Modal } from "../Modal";
import { Drawer } from "../Drawer";

export const AppGreeting = memo(function AppGreeting() {
	const [isOpen, setIsOpen] = useState(false);
	const isMobile = useMobile();

	useEffect(() => {
		if (!localStorage.getItem("greeting")) {
			setIsOpen(true);
			localStorage.setItem("greeting", "greeting_activated");
		}
	}, []);

	const onClose = () => setIsOpen(false);

	const text = (
		<ColumnStack gap="32" align="center">
			<TextHolder
				variant="error"
				size="l"
				title="Welcome on Work-Wise application"
			/>
			<TextHolder
				variant="error"
				size="m"
				text="Application still in development progress but functional."
			/>
			<TextHolder
				variant="error"
				size="m"
				text="Please visit 'About us' page and feel free to test app with credentials."
			/>
		</ColumnStack>
	);

	if (isMobile) {
		return (
			<Drawer lazy isOpen={isOpen} onClose={onClose}>
				{text}
			</Drawer>
		);
	}

	return (
		<Modal lazy isOpen={isOpen} onClose={onClose}>
			{text}
		</Modal>
	);
});
