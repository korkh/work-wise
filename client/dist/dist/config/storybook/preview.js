import { jsx as _jsx } from "react/jsx-runtime";
import ThemeDecorator from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../../src/shared/consts/Theme";
const preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: "fullscreen",
        themes: {
            default: "light",
            list: [
                { name: "light", class: ["app", Theme.LIGHT], color: "#ffffff" },
                { name: "dark", class: ["app", Theme.DARK], color: "#000000" },
                { name: "orange", class: ["app", Theme.ORANGE], color: "#ffb005" },
            ],
        },
    },
    decorators: [
        (Story) => (_jsx(ThemeDecorator, { theme: Theme.LIGHT, children: _jsx(Story, {}) })),
    ],
};
export default preview;
