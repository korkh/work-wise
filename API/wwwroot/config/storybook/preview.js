import { jsx as _jsx } from "react/jsx-runtime";
import RouterDecorator from "@/shared/config/storybook/RouterDecorator/RouterDecorator";
import ThemeDecorator from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import "../../src/app/styles/index.scss";
import { Theme } from "../../src/shared/consts/Theme";
import { SuspenseDecorator } from "@/shared/config/storybook/SuspenseDecorator/SuspenseDecorator";
import { I18NextDecorator } from "@/shared/config/storybook/I18NextDecorator/I18NextDecorator";
import StyleDecorator from "@/shared/config/storybook/StyleDecorator/StyleDecorator";
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
                { name: "blue", class: ["app", Theme.BLUE], color: "#8ca9c6" },
            ],
        },
    },
    decorators: [
        (Story) => (_jsx(RouterDecorator, { children: _jsx(SuspenseDecorator, { children: _jsx(ThemeDecorator, { theme: Theme.LIGHT, children: _jsx(I18NextDecorator, { children: _jsx(StyleDecorator, { children: _jsx(Story, {}) }) }) }) }) })),
    ],
};
export default preview;
