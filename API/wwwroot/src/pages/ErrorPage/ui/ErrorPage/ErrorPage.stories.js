import { jsx as _jsx } from "react/jsx-runtime";
import { Theme } from "../../../../shared/consts/Theme";
import ThemeDecorator from "../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ErrorPage } from "./ErrorPage";
const meta = {
    title: "Pages/ErrorPage",
    component: ErrorPage,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    args: {},
    argTypes: {},
    decorators: [
    // (Story) => (
    //   <StoreDecorator state={{}}>
    //     <Story />
    //   </StoreDecorator>
    // ),
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
