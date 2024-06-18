import { jsx as _jsx } from "react/jsx-runtime";
import { Theme } from "@/shared/consts/Theme";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { AppLogo } from "./AppLogo";
const meta = {
    title: "shared/AppLogo",
    component: AppLogo,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    args: {},
    argTypes: {},
    decorators: [
        (Story) => (_jsx(StoreDecorator, { state: {}, children: _jsx(Story, {}) })),
    ],
};
export default meta;
export const Primary = {
    args: { size: 150 },
};
export const Dark = {
    args: {},
    decorators: [
        (Story) => (_jsx(ThemeDecorator, { theme: Theme.DARK, children: _jsx(Story, {}) })),
    ],
};
