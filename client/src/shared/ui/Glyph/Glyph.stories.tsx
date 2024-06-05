import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/shared/consts/Theme";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Glyph } from "./Glyph";
import ProfileIcon from "@/shared/assets/icons/user-blank.svg?react";

const meta: Meta<typeof Glyph> = {
	title: "shared/Glyph",
	component: Glyph,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	args: { SvgImage: ProfileIcon },
	argTypes: {},
	decorators: [
		(Story) => (
			<StoreDecorator state={{}}>
				<Story />
			</StoreDecorator>
		),
	],
};

export default meta;

type Story = StoryObj<typeof Glyph>;

export const Primary: Story = {
	args: {},
};

export const Clicable: Story = {
	args: { clickable: true },
};

export const Dark: Story = {
	args: { clickable: true },
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		),
	],
};
