import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/shared/consts/Theme";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { EmployeeList } from "./EmployeeList";

const meta = {
	title: "Pages/EmployeeData/EmployeeList",
	component: EmployeeList,
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
} satisfies Meta<typeof EmployeeList>;

export default meta;

type Story = StoryObj<typeof EmployeeList>;

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
