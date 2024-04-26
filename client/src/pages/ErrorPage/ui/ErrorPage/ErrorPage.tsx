import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavigateFunction } from "react-router";
import { useLocation, useNavigate } from "react-router-dom";

import cls from "./ErrorPage.module.scss";
import { classNames } from "../../../../shared/lib/utils/classNames/classNames";
import { Button } from "../../../..//shared/ui/Button";

interface ErrorPageProps {
	className?: string;
	error?: Error | null;
}

export const ErrorPage = memo(function ErrorPage({
	className,
	error,
}: ErrorPageProps) {
	const navigate: NavigateFunction = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";
	const { t } = useTranslation("translation");

	const handleBack = () => {
		navigate(from, { replace: true });
		window.location.reload();
	};

	useEffect(() => {
		if (error != null || undefined) {
			console.log("Error", error);
		}
	}, [error]);

	return (
		<div role="alert" className={classNames(cls.errorPage, [className], {})}>
			<h3>{t("Oops.. Something went wrong")}</h3>
			{error && (
				<>
					<h6>{error.name}</h6>
					<p>{error.message}</p>
				</>
			)}
			<Button className={cls.btnBack} onClick={handleBack}>
				{t("Refresh page, please")}
			</Button>
		</div>
	);
});
