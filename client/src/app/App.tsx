import { getUserInited, initAuthData } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Button } from "@/shared/ui/Button";
import { Suspense, memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function App() {
	const { theme } = useTheme();
	const { t } = useTranslation("translation");
	const dispatch = useAppDispatch();
	const inited = useSelector(getUserInited);
	const toolbar = useAppToolbar();

	useEffect(() => {
		if (!inited) {
			dispatch(initAuthData());
		}
	}, [dispatch, inited]);

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

export default memo(App);
