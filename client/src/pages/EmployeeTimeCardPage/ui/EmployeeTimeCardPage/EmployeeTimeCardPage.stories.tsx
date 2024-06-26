import type { Meta, StoryObj } from "@storybook/react";
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
		(Story) => (
			<StoreDecorator state={{}}>
				<Story />
			</StoreDecorator>
		),
	],
} satisfies Meta<typeof EmployeeTimeTablePage>;

export default meta;

type Story = StoryObj<typeof EmployeeTimeTablePage>;

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
