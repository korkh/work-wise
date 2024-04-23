import { getUserInited, initAuthData } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Suspense, memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { useToolBarByAppRoute } from "./lib/useToolbarByAppRoute";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Navbar } from "@/widgets/Navbar";
import { AppRouter } from "./router";
import { Sidebar } from "@/widgets/Sidebar";
import { BaseLayout } from "@/shared/layouts/BaseLayout";
import { AppLoaderLayout } from "@/shared/layouts/AppLoaderLayout";

function App() {
	const { theme } = useTheme();
	const dispatch = useAppDispatch();
	const inited = useSelector(getUserInited);
	const toolbar = useToolBarByAppRoute();

	useEffect(() => {
		if (!inited) {
			dispatch(initAuthData());
		}
	}, [dispatch, inited]);

	if (!inited) {
		return (
			<div id="app" className={classNames("app_redesigned", [theme], {})}>
				<AppLoaderLayout />
			</div>
		);
	}

	return (
		<div id="app" className={classNames("app_redesigned", [theme], {})}>
			<Suspense fallback="">
				<BaseLayout
					header={<Navbar />}
					content={<AppRouter />}
					sidebar={<Sidebar />}
					toolbar={toolbar}
				/>
			</Suspense>
		</div>
	);
}

export default memo(App);
