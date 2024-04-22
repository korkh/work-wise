import { jsx as _jsx } from "react/jsx-runtime";
import { ErrorPage } from "@/pages/ErrorPage";
import React, { Suspense } from "react";
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorMessage: "" };
    }
    static getDerivedStateFromError(error) {
        if (error != null) {
            return { hasError: true, errorMessage: error.toString() || "" };
        }
        return null;
    }
    componentDidCatch(error, errorInfo) {
        if (error != null) {
            console.log("ErrorBoundary caught error", { error, errorInfo });
            this.setState({ error });
        }
    }
    render() {
        const { hasError, error } = this.state;
        const { children } = this.props;
        if (hasError) {
            return (_jsx(Suspense, { fallback: "", children: _jsx(ErrorPage, { error: error }) }));
        }
        return children;
    }
}
export default ErrorBoundary;
