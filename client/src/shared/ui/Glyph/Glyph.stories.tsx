import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/shared/const/Theme";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Glyph} from "./Glyph";

const meta = {
  title: "shared/Glyph",
  component: Glyph,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <StoreDecorator
        state={{}}
      >
        <Story />
      </StoreDecorator>
    ),
  ],
} satisfies Meta<typeof Glyph>;

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
