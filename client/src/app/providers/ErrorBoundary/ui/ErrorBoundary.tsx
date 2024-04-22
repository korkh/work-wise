import { ErrorPage } from "@/pages/ErrorPage";
import React, { ErrorInfo, ReactNode, Suspense } from "react";

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
	error: Error | null;
	errorMessage: string;
}

class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false, error: null, errorMessage: "" };
	}

	static getDerivedStateFromError(error: Error | null) {
		if (error != null) {
			return { hasError: true, errorMessage: error.toString() || "" };
		}

		return null;
	}

	componentDidCatch(error: Error | null, errorInfo: ErrorInfo) {
		if (error != null) {
			console.log("ErrorBoundary caught error", { error, errorInfo });
			this.setState({ error });
		}
	}

	render() {
		const { hasError, error } = this.state;
		const { children } = this.props;

		if (hasError) {
			return (
				<Suspense fallback="">
					<ErrorPage error={error} />
				</Suspense>
			);
		}

		return children;
	}
}

export default ErrorBoundary;
