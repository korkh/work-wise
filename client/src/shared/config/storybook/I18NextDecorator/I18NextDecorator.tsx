import i18next from "i18next";
import React, { FC, Suspense } from "react";
import { I18nextProvider } from "react-i18next";

interface Props {
	children?: React.ReactNode;
}

export const I18NextDecorator: FC<Props> = ({ children }) => (
	<I18nextProvider i18n={i18next}>
		<Suspense fallback="">{children}</Suspense>
	</I18nextProvider>
);
