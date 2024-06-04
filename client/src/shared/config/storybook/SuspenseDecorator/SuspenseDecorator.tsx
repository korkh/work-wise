import { Suspense } from "react";

interface Props {
	children?: React.ReactNode;
}

export const SuspenseDecorator = ({ children }: Props) => (
	<Suspense>{children}</Suspense>
);
