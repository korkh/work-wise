import { jsx as _jsx } from "react/jsx-runtime";
import { Theme } from "@/shared/consts/Theme";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import NotFoundPage from "./NotFoundPage";
const meta = {
    title: "Pages/NotFoundPage",
    component: NotFoundPage,
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
    args: {},
};
export const Dark = {
    args: {},
    decorators: [
        (Story) => (_jsx(ThemeDecorator, { theme: Theme.DARK, children: _jsx(Story, {}) })),
    ],
};
