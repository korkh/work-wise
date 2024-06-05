import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/consts/Theme";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof Button> = {
	title: "shared/Button",
	component: Button,
	parameters: {
		layout: "fullscrean",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: { children: ">", color: "normal" },
	decorators: [
		(Story) => (
			<StoreDecorator state={{}}>
				<ThemeDecorator theme={Theme.LIGHT}>
					<Story />
				</ThemeDecorator>
			</StoreDecorator>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: { children: "TEXT" },
};

export const Clear: Story = {
	args: {
		children: "TEXT",
		variant: "clear",
	},
};

export const Outline: Story = {
	args: {
		children: "TEXT",
		variant: "outline",
	},
};

export const OutlineSuccess: Story = {
	args: {
		children: "TEXT",
		variant: "outline",
		color: "success",
	},
};

export const OutlineError: Story = {
	args: {
		children: "TEXT",
		variant: "outline",
		color: "error",
	},
};

export const OutlineInfo: Story = {
	args: {
		children: "TEXT",
		variant: "outline",
		color: "info",
	},
};

export const OutlineSizeL: Story = {
	args: {
		children: "TEXT",
		variant: "outline",
		size: "l",
	},
};

export const FilledSizeL: Story = {
	args: {
		children: "TEXT",
		variant: "filled",
		size: "l",
	},
};

export const ClearSizeL: Story = {
	args: {
		children: "TEXT",
		variant: "clear",
		size: "l",
	},
};

export const OutlineSizeXL: Story = {
	args: {
		children: "TEXT",
		variant: "outline",
		size: "xl",
	},
};

export const OutlineDark: Story = {
	args: {
		variant: "outline",
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const Disabled: Story = {
	args: {
		variant: "outline",
		disabled: true,
	},
};
