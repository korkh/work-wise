import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
	build: {
		outDir: "../API/wwwroot",
	},
	plugins: [
		react(),
		svgr({
			include: "**/*.svg?react",
		}),
		mkcert(),
	],
	server: {
		port: 3000,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src/"),
			"@/app": path.resolve(__dirname, "./src/app"),
			"@/entities": path.resolve(__dirname, "./src/entities"),
			"@/features": path.resolve(__dirname, "./src/features"),
			"@/shared": path.resolve(__dirname, "./src/shared"),
			"@/pages": path.resolve(__dirname, "./src/pages"),
			"@/widgets": path.resolve(__dirname, "./src/widgets"),
		},
	},
	define: {
		__IS_DEV__: JSON.stringify(true),
		__API__: JSON.stringify(process.env.VITE_API),
		__PROJECT__: JSON.stringify("frontend"),
		"process.env": {},
	},
});
