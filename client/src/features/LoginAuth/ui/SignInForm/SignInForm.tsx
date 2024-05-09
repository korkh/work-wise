import { memo, useCallback } from "react";
import cls from "./SignInForm.module.scss";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import {
	DynamicReducerLoader,
	ReducersList,
} from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { TextHolder } from "@/shared/ui/TextHolder";
import { ColumnStack } from "@/shared/ui/Stack";
import { classNames } from "@/shared/lib/utils/classNames/classNames";

import {
	getSignInEmail,
	getSignInError,
	getSignInLoading,
	getSignInPassword,
} from "../..";
import { signInUser } from "../../model/services/signIn/signInUser";
import { signInActions, signInReducer } from "../../model/slices/signInSlice";
import { getRouteMain } from "@/shared/consts/routerConsts";
import { useNavigate } from "react-router-dom";

export interface SignInFormProps {
	className?: string;
	onSuccess: () => void;
}

const initialReducers: ReducersList = {
	signInForm: signInReducer,
};

const SignInForm = memo(function SignInForm({
	className,
	onSuccess,
}: SignInFormProps) {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const email = useSelector(getSignInEmail);
	const password = useSelector(getSignInPassword);
	const isLoading = useSelector(getSignInLoading);
	const error = useSelector(getSignInError);

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(signInActions.setEmail(value));
		},
		[dispatch]
	);

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(signInActions.setPassword(value));
		},
		[dispatch]
	);

	const onLoginClick = useCallback(async () => {
		const result = await dispatch(signInUser({ email, password }));
		if (result.meta.requestStatus === "fulfilled") {
			onSuccess();
			navigate(getRouteMain());
		}
	}, [dispatch, email, password, onSuccess, navigate]);

	return (
		<DynamicReducerLoader removeAfterUnmount reducers={initialReducers}>
			<ColumnStack
				gap="16"
				className={classNames(cls.signInForm, [className], {})}
			>
				<TextHolder title={t("Please sign in here!")} />
				{error && (
					<TextHolder
						text={t("Incorrect login email or password")}
						variant="error"
					/>
				)}
				<Input
					autofocus
					type="email"
					className={cls.input}
					placeholder={t("Email")}
					onChange={onChangeUsername}
					value={email}
				/>
				<Input
					type="password"
					className={cls.input}
					placeholder={t("Password")}
					onChange={onChangePassword}
					value={password}
				/>
				<Button
					className={cls.signInBtn}
					onClick={onLoginClick}
					disabled={isLoading}
				>
					{t("Sign in")}
				</Button>
			</ColumnStack>
		</DynamicReducerLoader>
	);
});

export default SignInForm;
