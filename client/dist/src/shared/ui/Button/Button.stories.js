import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "./Button";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/consts/Theme";
const meta = {
    title: "shared/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: { children: ">", color: "normal" },
    decorators: [
        (Story) => (_jsx(ThemeDecorator, { theme: Theme.LIGHT, children: _jsx(Story, {}) })),
    ],
};
export default meta;
export const Primary = {
    args: { children: "TEXT" },
};
export const Clear = {
    args: {
        children: "TEXT",
        variant: "clear",
    },
};
export const Outline = {
    args: {
        children: "TEXT",
        variant: "outline",
    },
};
export const OutlineSuccess = {
    args: {
        children: "TEXT",
        variant: "outline",
        color: "success",
    },
};
export const OutlineError = {
    args: {
        children: "TEXT",
        variant: "outline",
        color: "error",
    },
};
export const OutlineInfo = {
    args: {
        children: "TEXT",
        variant: "outline",
        color: "info",
    },
};
export const OutlineSizeL = {
    args: {
        children: "TEXT",
        variant: "outline",
        size: "l",
    },
};
export const FilledSizeL = {
    args: {
        children: "TEXT",
        variant: "filled",
        size: "l",
    },
};
export const ClearSizeL = {
    args: {
        children: "TEXT",
        variant: "clear",
        size: "l",
    },
};
export const OutlineSizeXL = {
    args: {
        children: "TEXT",
        variant: "outline",
        size: "xl",
    },
};
export const OutlineDark = {
    args: {
        variant: "outline",
    },
    decorators: [
        (Story) => (_jsx(ThemeDecorator, { theme: Theme.DARK, children: _jsx(Story, {}) })),
    ],
};
export const Disabled = {
    args: {
        variant: "outline",
        disabled: true,
    },
};
