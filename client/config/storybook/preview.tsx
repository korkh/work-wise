import ThemeDecorator from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../../src/shared/consts/Theme";
import type { Preview } from "@storybook/react";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		layout: "fullscreen",
		themes: {
			default: "light",
			list: [
				{ name: "light", class: ["app", Theme.LIGHT], color: "#ffffff" },
				{ name: "dark", class: ["app", Theme.DARK], color: "#000000" },
				{ name: "orange", class: ["app", Theme.ORANGE], color: "#ffb005" },
			],
		},
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LIGHT}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export default preview;
