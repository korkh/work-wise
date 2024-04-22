import { Button } from "@/shared/ui/Button";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

function App() {
	const { t } = useTranslation("translation");

	return (
		<Suspense fallback="">
			<div className="content-page">
				<h1>{t("HELLO VITE")}</h1>
				<Button variant={"outline"} color="error">
					BUTTON
				</Button>
			</div>
		</Suspense>
	);
}

export default App;
