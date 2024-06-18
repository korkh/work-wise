import path from "path";
const config = {
    stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        {
            name: "@storybook/addon-essentials",
            options: {
                backgrounds: false,
            },
        },
        "@storybook/addon-interactions",
        "@storybook/addon-docs",
        "storybook-addon-mock",
        "@storybook/addon-themes",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    async viteFinal(config) {
        return {
            ...config,
            resolve: {
                alias: {
                    "@": path.resolve(__dirname, "../../src/"),
                    "@/app": path.resolve(__dirname, "../../src/app"),
                    "@/entities": path.resolve(__dirname, "../../src/entities"),
                    "@/features": path.resolve(__dirname, "../../src/features"),
                    "@/shared": path.resolve(__dirname, "../../src/shared"),
                    "@/pages": path.resolve(__dirname, "../../src/pages"),
                    "@/widgets": path.resolve(__dirname, "../../src/widgets"),
                },
            },
            define: {
                __IS_DEV__: JSON.stringify(true),
                __API__: JSON.stringify("http://localhost:5000"),
                __PROJECT__: JSON.stringify("frontend"),
                "process.env": {},
            },
        };
    },
};
export default config;
