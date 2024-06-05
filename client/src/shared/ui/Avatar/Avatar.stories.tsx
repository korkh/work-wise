import type { Meta, StoryObj } from "@storybook/react";
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
		(Story) => (
			<StoreDecorator state={{}}>
				<Story />
			</StoreDecorator>
		),
	],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: { size: 150, src: AvatarImage },
};

export const Small: Story = {
	args: { size: 50, src: AvatarImage },
};
