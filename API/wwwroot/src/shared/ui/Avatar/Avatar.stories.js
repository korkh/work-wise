import { jsx as _jsx } from "react/jsx-runtime";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Avatar } from "./Avatar";
import AvatarImage from "./avatar.jpg";
const meta = {
    title: "shared/Avatar",
    component: Avatar,
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
    args: { size: 150, src: AvatarImage },
};
export const Small = {
    args: { size: 50, src: AvatarImage },
};
