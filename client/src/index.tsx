import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./app/styles/index.scss";
import "./shared/config/i18n/i18n";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./app/providers/StoreProvider";
import ErrorBoundary from "./app/providers/ErrorBoundary/ui/ErrorBoundary";
import { ForceUpdateProvider } from "./shared/lib/forceUpdateRender/foreceUpdateRender";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<StoreProvider>
			<ErrorBoundary>
				<ForceUpdateProvider>
					<ThemeProvider>
						<App />
					</ThemeProvider>
				</ForceUpdateProvider>
			</ErrorBoundary>
		</StoreProvider>
	</BrowserRouter>
);
