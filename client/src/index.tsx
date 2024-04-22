import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./app/styles/index.scss";
import "./shared/config/i18n/i18n";
import { ThemeProvider } from "./app/providers/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ThemeProvider>
		<App />
	</ThemeProvider>
);
