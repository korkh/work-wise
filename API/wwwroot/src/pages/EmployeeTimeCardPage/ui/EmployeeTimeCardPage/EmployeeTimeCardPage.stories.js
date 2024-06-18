import { jsx as _jsx } from "react/jsx-runtime";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import EmployeeTimeTablePage from "./EmployeeTimeCardPage";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/consts/Theme";
const meta = {
    title: "Pages/EmployeeTimeCardPage/EmployeeTimeTablePage",
    component: EmployeeTimeTablePage,
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
