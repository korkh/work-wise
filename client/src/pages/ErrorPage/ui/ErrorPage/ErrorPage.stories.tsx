import type { Meta, StoryObj } from "@storybook/react";
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
} satisfies Meta<typeof ErrorPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		),
	],
};
