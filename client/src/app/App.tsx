import { getUserInited, initAuthData } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Suspense, memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { Navbar } from "@/widgets/Navbar";
import { BaseLayout } from "@/shared/layouts/BaseLayout";
import { AppLoaderLayout } from "@/shared/layouts/AppLoaderLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppRouter } from "./providers/router";

function App() {
	const { theme } = useTheme();
	const dispatch = useAppDispatch();
	const inited = useSelector(getUserInited);

	useEffect(() => {
		if (!inited) {
			dispatch(initAuthData());
		}
	}, [dispatch, inited]);

	if (!inited) {
		return (
			<div id="app" className={classNames("app", [theme], {})}>
				<AppLoaderLayout />
			</div>
		);
	}

	return (
		<div id="app" className={classNames("app", [theme], {})}>
			<Suspense fallback="">
				<BaseLayout navbar={<Navbar />} content={<AppRouter />} />
			</Suspense>
			<ToastContainer position="bottom-right" hideProgressBar theme="colored" />
		</div>
	);
}

export default memo(App);
